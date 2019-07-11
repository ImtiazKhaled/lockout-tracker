import React from 'react';
import { Button } from 'antd';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class ResidentPrint extends React.Component {
    render() {

        function buildTableBody(data, columns) {
            var body = [];

            body.push(columns);

            data.forEach(function (row) {
                var dataRow = [];

                columns.forEach(function (column) {
                    dataRow.push(row[column].toString());
                })

                body.push(dataRow);
            });

            return body;
        }

        function table(data, columns) {
            return {
                table: {
                    headerRows: 1,
                    body: buildTableBody(data, columns),
                    widths: [75, 75, 80, 75],
                }
            };
        }

        var dd = {
            content: [
                {
                    columns: [
                        { text: this.props.data.name, style: 'header' },
                        { text: this.props.data.roomNumber, style: 'header' },
                    ],
                },
                {
                    columns: [
                        table(this.props.lockoutState, ['checkoutType', 'checkoutItem', 'checkoutTime', 'checkoutBy']),
                        table(this.props.returnState, ['checkinBy', 'checkinTime'])
                    ]
                }
            ]
        }

        return (
            <Button onClick={() => pdfMake.createPdf(dd).download(this.props.data.name + this.props.data.roomNumber + '.pdf')}>
                Print
           </Button>

        );
    }
}

export default ResidentPrint;