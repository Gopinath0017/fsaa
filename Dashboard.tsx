import React from 'react'
import { DollarSign, TrendingUp, PieChart, Activity } from 'lucide-react'

const MetricCard = ({ title, value, icon: Icon, trend }: { title: string; value: string; icon: any; trend: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="bg-blue-100 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    <p className={`text-sm mt-4 ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
      {trend} from last month
    </p>
  </div>
)

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Revenue"
          value="$50,240"
          icon={DollarSign}
          trend="+12.5%"
        />
        <MetricCard
          title="Growth"
          value="24.5%"
          icon={TrendingUp}
          trend="+4.1%"
        />
        <MetricCard
          title="Expenses"
          value="$21,340"
          icon={PieChart}
          trend="-2.4%"
        />
        <MetricCard
          title="Profit Margin"
          value="28.6%"
          icon={Activity}
          trend="+5.7%"
        />
      </div>
      
      <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">Financial Statement Upload</h2>
        <p className="mt-2 text-gray-600">Upload your financial statements in CSV or Excel format for analysis</p>
        <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            className="hidden"
            id="file-upload"
            accept=".csv,.xlsx,.xls"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Choose File
          </label>
          <p className="mt-2 text-sm text-gray-500">or drag and drop files here</p>
        </div>
      </div>
    </div>
  )
}
