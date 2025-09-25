"use client";
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";
import { title } from "process";

 

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts/>
      <CardSalesSummary/>
      <CardPurchaseSummary/>
      <CardExpenseSummary/>
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-500 w-6 h-6"/>}
        dateRange="12 - 21 July 2025"
        details={[
          {
          title: "Customer Growth", 
          amount: "99.00", 
          changePercentage: 23, 
          IconComponent: TrendingUp
        },

          {
          title: "Expenses", 
          amount: "25.00", 
          changePercentage: -57, 
          IconComponent: TrendingDown
        }
        ]}
      />
<StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="12 - 21 July 2025"
        details={[
          {
            title: "Dues",
            amount: "191.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "44",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="12 - 21 July 2025"
        details={[
          {
            title: "Sales",
            amount: "567.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />


    </div>
  )
}

export default Dashboard