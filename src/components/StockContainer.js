import React from "react";
import Stock from "./Stock";

function StockContainer({stockData, onStockClick}) {

  const stockInfo = stockData.map((stock) => {
    return <Stock 
      key={stock.id}
      name={stock.name}
      price={stock.price}
      ticker={stock.ticker}
      onStockClick={onStockClick}
    />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockInfo}
    </div>
  );
}

export default StockContainer;
