import PropTypes from "prop-types";
import { Table, Tbody, Thead, TableTH, TableTD, TableRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) =>{
   
    return (
        <Table >
            <Thead>
                <TableRow>
                <TableTH>Type</TableTH>
                <TableTH>Amount</TableTH>
                <TableTH>Currency</TableTH>
                </TableRow>
            </Thead>
            {items.map((item) => (
                <Tbody key={item.id}>
                    <TableRow type = {item.type}>
                    <TableTD>{item.type}</TableTD>
                    <TableTD>{item.amount}</TableTD>
                    <TableTD>{item.currency}</TableTD>
                    </TableRow>
                </Tbody>
            ))}
        </Table>
    )
};

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}