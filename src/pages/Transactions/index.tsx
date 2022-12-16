import { Header } from "../../../components/Header";
import { Summary } from "../../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              <td>Vendas</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighlight variant="outcome">-R$ 10.000</PriceHighlight>
              <td>Vendas</td>
              <td>17/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighlight variant="income">R$ 8.000</PriceHighlight>
              <td>Vendas</td>
              <td>15/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
