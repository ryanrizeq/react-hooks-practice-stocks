import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Tech')
  const [sort, setSort] = useState('Alphabetically')

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r)=>r.json())
      .then((stocks)=>setStockData(stocks))
  }, [])

  function onAddStock(name) {
    setPortfolio([...portfolio, name])
  }

  function onRemoveStock(name) {
    setPortfolio(portfolio.filter((stock) => stock !== name))
  }

  function onFilterChange(category) {
    setSelectedFilter(category)
  }

  function onSortChange(sortMethod) {
    setSort(sortMethod)
  }

  const stocksBySort = [...stockData].sort((stock1, stock2) => {
    if (sort === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock1.price - stock2.price;
    }
  })

  const stockDataToShow = stocksBySort.filter((stock) => stock.type === selectedFilter)

  return (
    <div>
      <SearchBar onFilterChange={onFilterChange} sort={sort} onSortChange={onSortChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockDataToShow} onStockClick={onAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stockData={stockDataToShow} portfolio={portfolio} onRemoveStock={onRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
