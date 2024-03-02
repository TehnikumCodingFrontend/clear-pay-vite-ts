import "./ExchangeRateTable.scss";

export const ExchangeRateTable = () => {
  return (
    <div className="ExchangeRateTable">
      <table>
        <thead>
          <tr>
            <th>
              <h2>Валюта</h2>
            </th>
            <th>
              <h2>Курс ЦБ</h2>
            </th>
            <th>
              <h2>Покупка</h2>
            </th>
            <th>
              <h2>Продажа</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flagContainer">
                <img src="/img/flags/usa-flag.png" alt="usa-flag" />
                <div className="text_container">
                  <span className="title">USD</span>
                  <span className="description">Доллар США</span>
                </div>
              </div>
            </td>
            <td>11 365.26</td>
            <td>11 340.00</td>
            <td>11 395.00</td>
          </tr>
          <tr>
            <td>
              <div className="container">
                <img src="/img/flags/eu-flag.png" alt="eu-flag" />
                <div className="text_container">
                  <span className="title">EUR</span>
                  <span className="description">Евро</span>
                </div>
              </div>
            </td>
            <td>12 447.23</td>
            <td>12 000.00</td>
            <td>12 800.00</td>
          </tr>
          <tr>
            <td>
              <div className="container">
                <img src="/img/flags/ru-flag.png" alt="ru-flag" />
                <div className="text_container">
                  <span className="title">RUB</span>
                  <span className="description">Рубли</span>
                </div>
              </div>
            </td>
            <td>143.11</td>
            <td>123.00</td>
            <td>163.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
