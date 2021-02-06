import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form } from "react-bootstrap";
import ModalForm from "../components/ModalForm";
import { useForm } from "react-hook-form";
import { workers } from "./workers";
import { ExportCSV } from "../components/ExportCSV";

export let materials = [
  {
    name: "Agrega",
    type: "TON",
    amount: 1,
    status: "Onay Bekliyor",
    starts: "Ahmet Şef",
  },
  {
    name: "Agrega",
    type: "TON",
    amount: 3,
    status: "Onaylanmış",
    starts: "Ahmet Şef",
  },
  {
    name: "Çimento",
    type: "KG",
    amount: 50,
    status: "Red",
    starts: "Ahmet Şef",
  },
  {
    name: "Agrega",
    type: "TON",
    amount: 100,
    status: "Red",
    starts: "Ahmet Şef",
  },
  {
    name: "Agrega",
    type: "TON",
    amount: 4,
    status: "Onaylanmış",
    starts: "Ahmet Şef",
  },
];
const Materials: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    materials = [data, ...materials];
  };
  const [items, setItems] = React.useState([]);

  const approveAll = () => {
    materials = materials.map((p, i) => ({
      ...p,
      id: i + 1,
      status: "Onaylanmış",
    }));
    setItems(materials);
  };

  React.useEffect(() => {
    setItems(
      materials.map((p, i) => ({
        ...p,
        id: i + 1,
      }))
    );
  }, [materials]);

  return (
    <div>
      <Layout pageTitle={"Malzemeler"}>
        <div className={"d-flex mb-3"}>
          <ModalForm
            buttonTitle={"Yeni Malzeme Kaydı"}
            saveEvent={handleSubmit(onSubmit)}
          >
            <form>
              <Form.Control
                type="text"
                placeholder="Ad"
                name="name"
                ref={register}
              />

              <br />

              <Form.Control
                type="text"
                placeholder="Miktar"
                name="amount"
                ref={register}
              />

              <br />

              <Form.Control as="select" name="type" ref={register}>
                <option>Tip Seçin</option>
                <option>Agrega</option>
                <option>Kum</option>
                <option>Çimento</option>
                <option>Beton</option>
                <option>Demir</option>
              </Form.Control>

              <br />
              <Form.Control
                type="text"
                placeholder="İşlemi Başlatan"
                name="starts"
                ref={register}
              />

              <br />
              <Form.Control
                type="text"
                placeholder="Onay Bekliyor"
                name="status"
                ref={register}
                disabled={true}
              />
            </form>
          </ModalForm>
          <ExportCSV csvData={items} fileName={"materials"} />
          <Button variant="info" className="ml-auto" onClick={approveAll}>
            Hepsini onayla
          </Button>
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
            Malzeme İsmi
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="amount"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Miktar
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="type"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Tip
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="status"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Durumu
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="starts"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            İşlemi Başlatan
          </TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    </div>
  );
};

export default Materials;
