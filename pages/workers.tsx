import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";

const Workers: NextPage = () => {
  var products = [
    {
      nameSurname: "Ahmet Göğebakan",
      status: "İşçi",
    },
    {
      nameSurname: "Mehmet Yılmaz",
      status: "İşçi",
    },
    {
      nameSurname: "Hüseyin Tok",
      status: "İşçi",
    },
    {
      nameSurname: "Yılmaz Erdinç",
      status: "İşçi",
    },
    {
      nameSurname: "Ozan Yılmaz",
      status: "İşçi",
    },
    {
      nameSurname: "Cem Güven Tok",
      status: "İşçi",
    },
    {
      nameSurname: "Kürşat Tepe",
      status: "İşçi",
    },
    {
      nameSurname: "Korhan Kordel",
      status: "İşçi",
    },
    {
      nameSurname: "Cem Güven Tok",
      status: "İşçi",
    },
    {
      nameSurname: "Kürşat Tepe",
      status: "İşçi",
    },
    {
      nameSurname: "Korhan Kordel",
      status: "İşçi",
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
            Yeni Çalışan
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
