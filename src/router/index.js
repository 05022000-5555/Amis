import { createRouter, createWebHistory } from "vue-router";
import EmployeeList from "../components/view/EmployeeList.vue"
import Overview from "../components/view/OverviewList.vue"
import Asset from "../components/view/AssetCompany.vue"
import Cash from "../components/view/CashList.vue"
import Deposits from "../components/view/DepositsCash.vue"
import Management from "../components/view/ManageInvoice.vue"
import Payroll from "../components/view/PayRoll.vue"
import Price from "../components/view/PriceProduce.vue"
import Purchase from "../components/view/PurCharse.vue"
import Repos from "../components/view/RepoMiSa.vue"
import Sale from "../components/view/SaleMiSa.vue"
import Synthetic from "../components/view/SyntheticTotal.vue"
import tax from "../components/view/TaxCompany.vue"
import Tool from "../components/view/ToolSetup.vue"


const routes = [
    {path: '/employee', component: EmployeeList},
    {path: '/overview', component: Overview},
    {path: '/asset', component: Asset},
    {path: '/cash', component: Cash},
    {path: '/Deposits', component: Deposits},
    {path: '/Management', component: Management},
    {path: '/Payroll', component: Payroll},
    {path: '/Price', component: Price},
    {path: '/Purchase', component: Purchase},
    {path: '/Repos', component: Repos},
    {path: '/Sale', component: Sale},
    {path: '/Synthetic', component: Synthetic},
    {path: '/tax', component: tax},
    {path: '/Tool', component: Tool},
]

const router =createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
  })
export default router

