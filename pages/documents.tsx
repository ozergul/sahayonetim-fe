import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form } from "react-bootstrap";
import ModalForm from "../components/ModalForm";
import { useForm } from "react-hook-form";
import { workers } from "./workers";
import { ExportCSV } from "../components/ExportCSV";
export let documents = [
  {
    name: "Yemekhane ihale Sözleşmesi",
    date: "Sat Feb 04 2021 19:40:03 GMT+0300 (GMT+03:00)",
    file: null,
  },
  {
    name: "Beton ihale Sözleşmesi",
    date: "Sat Feb 04 2021 19:40:03 GMT+0300 (GMT+03:00)",
    file: null,
  },
  {
    name: "Ahmet Şef İstifa Dilekçesi",
    date: "Sat Feb 04 2021 19:40:03 GMT+0300 (GMT+03:00)",
    file: null,
  },
];
const Documents: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    documents = [data, ...documents];
  };
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(
      documents.map((p, i) => ({
        ...p,
        id: i + 1,
      }))
    );
  }, [documents]);

  return (
    <div>
      <Layout pageTitle={"Evraklar"}>
        <div className={"d-flex mb-3"}>
          <ModalForm
            buttonTitle={"Yeni Evrak Ekle"}
            saveEvent={handleSubmit(onSubmit)}
          >
            <form>
              <Form.Control
                type="text"
                placeholder="Dosya Adı "
                name="name"
                ref={register}
              />

              <br />

              <Form.Control
                type="text"
                placeholder="Tarih"
                name="date"
                ref={register}
              />
            </form>
          </ModalForm>
          <ExportCSV csvData={items} fileName={"documents"} />
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
            dataField="name"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Ad
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="date"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Tarih
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="file"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Dosya
          </TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    </div>
  );
};

export default Documents;
