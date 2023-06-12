import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stockData, portfolio, onRemoveStock}) {

  const stocksToDisplay = stockData.filter((stock) => portfolio.includes(stock.name))

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToDisplay.map((stock) => {
        return <Stock
          key={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          onStockClick={onRemoveStock}
        />
      })}
    </div>
  );
}

export default PortfolioContainer;
