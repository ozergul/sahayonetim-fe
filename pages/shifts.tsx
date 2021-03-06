import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button, Form } from "react-bootstrap";
import ModalForm from "../components/ModalForm";
import { useForm } from "react-hook-form";
import { workers } from "./workers";
import { ExportCSV } from "../components/ExportCSV";
export let shifts = [
  {
    nameSurName: "Ahmet Göğebakan",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Mehmet Yılmaz",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Hüseyin Tok",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Yılmaz Erdinç",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Ozan Yılmaz",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Cem Güven Tok",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Kürşat Tepe",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Korhan Kordel",
    time: "8.5",
    date: new Date(),
  },
  {
    nameSurName: "Cem Güven Tok",
    time: "8",
    date: new Date(),
  },
  {
    nameSurName: "Kürşat Tepe",
    time: "0",
    date: new Date(),
  },
  {
    nameSurName: "Korhan Kordel",
    time: "12",
    date: new Date(),
  },
];
const Shifts: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    shifts = [data, ...shifts];
  };
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(
      shifts.map((p, i) => ({
        ...p,
        id: i + 1,
      }))
    );
  }, [shifts]);

  return (
    <div>
      <Layout pageTitle={"MEsailer"}>
        <div className={"d-flex mb-3"}>
          <ModalForm
            buttonTitle={"Yeni Mesai Kaydı"}
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

              <Form.Control
                type="text"
                placeholder="Süre"
                name="time"
                ref={register}
              />
            </form>
          </ModalForm>
          <ExportCSV csvData={items} fileName={"shifts"} />
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
            dataField="time"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Çalışma (saat)
          </TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    </div>
  );
};

export default Shifts;
