import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

import "./assets/css/style.css";
// import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import { getMenusdata, sendNotification } from "./api/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsLogin } from "./slice/auth";
import { getToken2 } from "./utils/localStorage";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import LoginPage from "./pages/login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import PrivateRoute from "./privateRote/PrivateRoute";
import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DashboardLeadPage from "./pages/Dashboard-Lead/Index";
import PageNotFound from "./common/pageNotFound/PageNotFound";
import CommonSetting from "./pages/webSettingPage/CommonSetting";
import ManageStoreTime from "./pages/webSettingPage/ManageStoreTime";
import BannerSetting from "./pages/webSettingPage/BannerSetting";
import MenuSetting from "./pages/webSettingPage/MenuSetting";
import SeoSetting from "./pages/webSettingPage/SeoSetting";
import SocialSetting from "./pages/webSettingPage/SocialSetting";
import WidgetSetting from "./pages/webSettingPage/WidgetSetting";
import EmailSettingWeb from "./pages/webSettingPage/EmailSettingWeb";
import CustomerWeb from "./pages/webSettingPage/CustomerWeb";
import Coupon from "./pages/webSettingPage/Coupon";
import SubscribeWeb from "./pages/webSettingPage/SubscribeWeb";
import Reservation from "./pages/FoodsBhojan/Reservation/Reservation";
import AddBooking from "./pages/FoodsBhojan/Reservation/AddBooking";
import UnAvailableDay from "./pages/FoodsBhojan/Reservation/UnAvailableDay";
import ResvartionSetting from "./pages/FoodsBhojan/Reservation/ResvartionSetting";
import SetProductionUnit from "./pages/FoodsBhojan/Production/SetProductionUnit";
import ProductionList from "./pages/FoodsBhojan/Production/ProductionList";
import AddProduction from "./pages/FoodsBhojan/Production/AddProduction";
import ProductionSetting from "./pages/FoodsBhojan/Production/ProductionSetting";
import PurchaseReport from "./pages/FoodsBhojan/Report/PurchaseReport";
import StockReportProductWise from "./pages/FoodsBhojan/Report/StockReportProductWise";
import StockKitchen from "./pages/FoodsBhojan/Report/StockKitchen";
import CashRegister from "./pages/FoodsBhojan/Report/CashRegister";
import SellReport from "./pages/FoodsBhojan/Report/SellReport";
import SellDateBy from "./pages/FoodsBhojan/Report/SellDateBy";
import CommissionReport from "./pages/FoodsBhojan/Report/CommissionReport";
import SaleByTable from "./pages/FoodsBhojan/Report/SaleByTable";
import ReportSell from "./pages/FoodsBhojan/Report/Report-SubSub/ReportSell";
import SellReportItem from "./pages/FoodsBhojan/Report/Report-SubSub/SellReportItem";
import ServiceCharges from "./pages/FoodsBhojan/Report/Report-SubSub/ServiceCharges";
import SellWaitersReport from "./pages/FoodsBhojan/Report/Report-SubSub/SellWaitersReport";
import KitchenSell from "./pages/FoodsBhojan/Report/Report-SubSub/KitchenSell";
import DeliveryTypeSell from "./pages/FoodsBhojan/Report/Report-SubSub/DeliveryTypeSell";
import CashierReport from "./pages/FoodsBhojan/Report/Report-SubSub/CashierReport";
import AddUser from "./pages/FoodsBhojan/User/AddUser";
import UserData from "./pages/FoodsBhojan/User/UserData";
import ZomatoDashboardPage from "./pages/zomatoDashboard";
import ResurentDashboardRatingPage from "./pages/resturantDashBoardRating";
import ResturentDasboardPage from "./pages/resturentDasbord";
import InventoryDashboardPage from "./pages/inventoryDashboard";
import StockTransferEntryPage from "./pages/stockTransferEntry";
import StockTransferEntryAdd from "./components/stockTransferEntry/stockTransferEntryAdd/StockTransferEntryAdd.js";

import OrderlistData from "./components/orderlist/ordercall";
import PendingData from "./components/pendingorder/pendingcall";
import CompleteData from "./components/completeorder/completecall";
import AddcategoryData from "./components/managecategory/addcategorycall";
import CategoryListData from "./components/categorylist/categorylistcall";
import AddFoodData from "./components/addfood/addfoodcall";
import FoodlistData from "./components/foodlist/foodlistcall";
import AddGroupData from "./components/addgroupitem/addgroupcall";
import VarientData from "./components/varientfood/varientcall";
import FoodAvailbityData from "./components/foodavlailabity/foodcall";
import MenuTypeData from "./components/menutype/menutypecall";
import AddonsData from "./components/addones/addonscall";
import Addons from "./components/addones/addons";
import AddonListData from "./components/addonlist/addonslistcall";
import AddonAssign from "./components/addoneassignlist/addassigncall";
import AddonAssignData from "./components/addoneassignlist/addassigncall";
import PosInvoiceData from "./components/posinvoice/poscall";
import CancelData from "./components/cancel/cancelcall";
import CounterData from "./components/counter/countercall";
import PosData from "./components/possetting/possettingdata";
import Soundset from "./components/sound/sounddata";
import CounterDashboardData from "./components/counterdashboard/counterdashboardcall";
import KitchenDashboardData from "./components/kitchendashboard/kitchencall";
import AddPurchaseData from "./components/purchasemanage/purchasecall";
import PurchaseItem from "./pages/purchase-manage/purchase-item.js";
import AddPurchase from "./components/purchasemanage/addpurchase.js";
import PurchaseReturn from "./pages/purchase-manage/purchase-return.js";
import ReturnInvoice from "./pages/purchase-manage/return-invoice.js";
import SupplierManage from "./pages/purchase-manage/supplier-manage.js";
import StockOutIngredient from "./pages/purchase-manage/stock-out-ingredients.js";
import SupplierLedger from "./pages/purchase-manage/SupplierLedger.js";
import SupplierPopUp from "./components/listing/supplier-popup-add.js";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [navigateState, setNavigateState] = useState(null);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }

  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);


  }, [isLogin]);





  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })
  }
  // console.log(window.localStorage.getItem('dashRout') == null);

  const [mnualData, setManualData] = useState()
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/loginPage"} />} />  */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={`${window.localStorage.getItem('dashRout')}`} />} />
            {/* <Route path="/" element={<Navigate to={`/admin`} />} /> */}
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path={`${location?.pathname}`} element={<DasBoardRight />} /> */}
              <Route path={`contest_dashboard`} element={<DasBoardRight />} />
              <Route path={`lead_dashboard`} element={<DashboardLeadPage />} />
                 
              {/* meraj */}
              <Route path="common-setting" element={<CommonSetting />} />
              <Route path="manage-store" element={<ManageStoreTime />} />
              <Route path="banner-setting" element={<BannerSetting />} />
              <Route path="menu-setting" element={<MenuSetting />} />
              <Route path="seo-setting" element={<SeoSetting />} />
              <Route path="social-setting" element={<SocialSetting />} />
              <Route path="widget-setting" element={<WidgetSetting />} />
              <Route path="email-setting-web" element={<EmailSettingWeb />} />
              <Route path="customer-web" element={<CustomerWeb />} />
              <Route path="coupon-list" element={<Coupon />} />
              <Route path="subscribe-web" element={<SubscribeWeb/>} />

              {/* .....kamran...... */}
              
              <Route path="reservation"element={<Reservation/>}/>
              <Route path="add-book"element={<AddBooking/>}/>
                      <Route path="un-day"element={<UnAvailableDay/>}/>
                      <Route path="reservation-setting"element={<ResvartionSetting/>}/>
                      <Route path="set-production"element={<SetProductionUnit/>}/>
                      <Route path="production-list"element={<ProductionList/>}/>
                      <Route path="add-production"element={<AddProduction/>}/>
                      <Route path="production-setting"element={<ProductionSetting/>}/>
                     
                      <Route path="purchase-report"element={<PurchaseReport/>}/>
                      <Route path="stock-report"element={<StockReportProductWise/>}/>
                      <Route path="stock-kitchen"element={<StockKitchen/>}/>
                      <Route path="cash-register"element={<CashRegister/>}/>
                      <Route path="sell-report"element={<SellReport/>}/>
                      <Route path="selldate-report"element={<SellDateBy/>}/>
                      <Route path="commission-report"element={<CommissionReport/>}/>
                      <Route path="sale-table"element={<SaleByTable/>}/>
                      <Route path="filter-report"element={<ReportSell/>}/>
                      <Route path="report-items"element={<SellReportItem/>}/>
                      <Route path="service-charges"element={<ServiceCharges/>}/>
                      <Route path="sell-waiters"element={<SellWaitersReport/>}/>
                      <Route path="kitchen-sell"element={<KitchenSell/>}/>
                      <Route path="delivery-type"element={<DeliveryTypeSell/>}/>
                      <Route path="cashier-report"element={<CashierReport/>}/>
                             
                      <Route path="add-user"element={<AddUser/>}/>
                      <Route path="user-data"element={<UserData/>}/>

                      {/* .... Dashboard .... */}
                      <Route path="Zomato-restaurant-dashboard" element={<ZomatoDashboardPage />} />
                      <Route path="restaurant-company-dashboard" element={<ResturentDasboardPage />} />
                      <Route path="restaurant-rating-dashboard" element={<ResurentDashboardRatingPage />} />
                      <Route path="restaurant-inventory-dashboard" element={<InventoryDashboardPage />} />
                      <Route path="stock-transfer-entry" element={<StockTransferEntryPage />} />
                      <Route path="add-stock-transfer-entry" element={<StockTransferEntryAdd />} />

                      {/* sima */}
              <Route path="order-list" element={<OrderlistData />} />
              <Route path="Pendingorder" element={<PendingData />} />
              <Route path="completeorder" element={<CompleteData />} />
              <Route path="manage-adons" element={<AddcategoryData />} />
              <Route path="manage-category" element={<CategoryListData />} />
              <Route path="add-food" element={<AddFoodData />} />
              <Route path="food-list" element={<FoodlistData />} />
              <Route path="add-group-item" element={<AddGroupData />} />
              <Route path="food-varient" element={<VarientData />} />
              <Route path="food-availablity" element={<FoodAvailbityData />} />
              <Route path="menu-type" element={<MenuTypeData />} />
              <Route path="add-adons" element={<AddonsData />} />
              <Route path="addons-list" element={<AddonListData />} />
              <Route path="add-ons-assign-list" element={<AddonAssignData />} />
              <Route path="pos-invoice" element={<PosInvoiceData />} />
              <Route path="cancel-order" element={<CancelData />} />
              <Route path="counter-list" element={<CounterData />} />
              <Route path="pos-setting" element={<PosData />} />
              <Route path="sound-setting" element={<Soundset />} />
              <Route path="counter-dashboard" element={<CounterDashboardData />} />
              <Route path="kitchen-dashboard" element={<KitchenDashboardData />} />
              {/* sima */}

                      {/* ..... Adil .... */}
                {/* <Route path="new_message" element={<NewMessage />} />
                <Route path="inbox-message" element={<InboxMessage />} />
                <Route path="sent-message" element={<SentMessage />} />
                <Route path="themes" element={<Themes />} /> */}
                {/* <Route path="auto-update" element={<AutoUpdate />} /> */}
                <Route path="purchase-item" element={<PurchaseItem />} />
                <Route path="add-purchase" element={<AddPurchase />} />
                <Route path="purchase-return" element={<PurchaseReturn/>} />
                <Route path="return-invoice" element={<ReturnInvoice/>} />
                <Route path="supplier-manage" element={<SupplierManage/>} />
                <Route path="supplier-popup-add" element={<SupplierPopUp/>} />
                <Route path="stock-out-ingredients" element={<StockOutIngredient/>} />
                <Route path="supplier-ledger" element={<SupplierLedger/>}/>
              
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
