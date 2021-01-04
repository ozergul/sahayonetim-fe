import React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";

const Workers: NextPage = () => {
  var products = [
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
      name: "Agrega",
      type: "TON",
      amount: 100,
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

  products = products.map((p, i) => ({
    ...p,
    id: i + 1,
  }));

  return (
    <div>
      <Layout>
        <div className={"d-flex mb-3"}>
          <Button variant="success" className="mr-2">
            Yeni Malzeme
          </Button>
          <Button variant="info">Excel İndir</Button>
          <Button variant="info" className="ml-auto">
            Hepsini onayla
          </Button>
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
            dataField="name"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Malzeme İsmi
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="type"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Tip
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="amount"
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Miktar
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

export default Workers;
