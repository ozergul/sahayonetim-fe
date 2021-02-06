import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form } from "react-bootstrap";
import ModalForm from "../components/ModalForm";
import { useForm } from "react-hook-form";
import { ExportCSV } from "../components/ExportCSV";

export let workers = [
  {
    nameSurName: "Ahmet Göğebakan",
    status: "İşçi",
  },
  {
    nameSurName: "Mehmet Yılmaz",
    status: "İşçi",
  },
  {
    nameSurName: "Hüseyin Tok",
    status: "İşçi",
  },
  {
    nameSurName: "Yılmaz Erdinç",
    status: "İşçi",
  },
  {
    nameSurName: "Ozan Yılmaz",
    status: "İşçi",
  },
  {
    nameSurName: "Cem Güven Tok",
    status: "İşçi",
  },
  {
    nameSurName: "Kürşat Tepe",
    status: "İşçi",
  },
  {
    nameSurName: "Korhan Kordel",
    status: "İşçi",
  },
  {
    nameSurName: "Cem Güven Tok",
    status: "İşçi",
  },
  {
    nameSurName: "Kürşat Tepe",
    status: "İşçi",
  },
  {
    nameSurName: "Korhan Kordel",
    status: "İşçi",
  },
] as any;

const Workers: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    workers = [data, ...workers];
  };
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(
      workers.map((p, i) => ({
        ...p,
        id: i + 1,
      }))
    );
  }, [workers]);

  return (
    <div>
      <Layout pageTitle={"Çalışanlar"}>
        <div className={"d-flex mb-3"}>
          <ModalForm
            buttonTitle={"Yeni Çalışan"}
            saveEvent={handleSubmit(onSubmit)}
          >
            <form>
              <Form.Control
                type="text"
                placeholder="Ad Soyad"
                name="nameSurName"
                ref={register}
              />

              <br />

              <Form.Control as="select" name="status" ref={register}>
                <option>Mevki Seçin</option>
                <option>İşçi</option>
                <option>İnşaat Mühendisi</option>
                <option>Genel Eleman</option>
                <option>Yönetim</option>
              </Form.Control>
            </form>
          </ModalForm>
          <ExportCSV csvData={items} fileName={"workers"} />
        </div>

        <BootstrapTable
          data={items}
          striped={true}
          hover={true}
          version="4"
          pagination
          selectRow={{
            mode: "checkbox",
          }}
        >
          <TableHeaderColumn
            dataField="id"
            isKey={true}
            dataAlign="center"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="nameSurName"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Ad Soyad
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="status"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Mevki
          </TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    </div>
  );
};

export default Workers;
