import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";

const Workers: NextPage = () => {
  var products = [
    {
      nameSurname: "Ahmet Göğebakan",
      time: "8",
    },
    {
      nameSurname: "Mehmet Yılmaz",
      time: "8",
    },
    {
      nameSurname: "Hüseyin Tok",
      time: "8",
    },
    {
      nameSurname: "Yılmaz Erdinç",
      time: "8",
    },
    {
      nameSurname: "Ozan Yılmaz",
      time: "8",
    },
    {
      nameSurname: "Cem Güven Tok",
      time: "8",
    },
    {
      nameSurname: "Kürşat Tepe",
      time: "8",
    },
    {
      nameSurname: "Korhan Kordel",
      time: "8.5",
    },
    {
      nameSurname: "Cem Güven Tok",
      time: "8",
    },
    {
      nameSurname: "Kürşat Tepe",
      time: "-",
    },
    {
      nameSurname: "Korhan Kordel",
      time: "12",
    },
  ];

  products = products.map((p, i) => ({
    ...p,
    id: i + 1,
  }));

  return (
    <div>
      <Layout>
        <div className={"d-flex mb-3"}>
          <Button variant="success" className="mr-2">
            Yeni Mesai Kaydı
          </Button>
          <Button variant="info">Excel İndir</Button>
        </div>

        <BootstrapTable
          data={products}
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
            Çalışan ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="nameSurname"
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

export default Workers;
