import React, { ReactElement } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SellerHeader } from "./components/shared/SellerHeader";
import { LeftSidebar } from "./components/shared/LeftSidebar";
import {
  getListing,
  getRegisterWizard,
  getOrders,
  getShipment,
  getOrderDetails,
  getForgotPassword,
  getVerificationCode,
  getAddListing,
} from "./routes";
import { RegisterWizard } from "./components/RegisterWizard";
import { PasswordPage } from "./components/password/PasswordPage";
import { VerifyAccount } from "./components/password/VerifyAccount";
import { Orders } from "./components/orders/OrdersPage";
import { Shipment } from "./components/shipment/ShipmentPage";
import { ListingPage } from "./components/listing/ListingPage";
import { NewListing } from "./components/NewListings/NewListing";

import { OrderDetail } from "./components/orders/OrderDetail";

function App(): ReactElement {
  const matchRegister = useRouteMatch(getRegisterWizard());
  const matchNewListing = useRouteMatch(getAddListing());
  const matchPassword = useRouteMatch(getForgotPassword());
  const matchVerifyAccount = useRouteMatch(getVerificationCode());

  const showLeftSidebar =
    !matchRegister?.isExact && !matchPassword?.isExact && !matchVerifyAccount?.isExact && !matchNewListing?.isExact;
  const showNewListing = matchNewListing?.isExact;

  return (
    <div className="flex flex-col min-h-screen">
      {!showNewListing && <SellerHeader />}

      <div className="bg-background flex flex-1">
        {showLeftSidebar && (
          <div className="w-64">
            <LeftSidebar />
          </div>
        )}
        <div className="flex-grow">
          <Switch>
            <Route path={getOrders()}>
              <Orders />
            </Route>
            <Route path={getListing()}>
              <ListingPage />
            </Route>
            <Route path={getAddListing()}>
              <NewListing />
            </Route>
            <Route path={getRegisterWizard()}>
              <RegisterWizard />
            </Route>
            <Route path={getForgotPassword()}>
              <PasswordPage />
            </Route>
            <Route path={getVerificationCode()}>
              <VerifyAccount />
            </Route>

            <Route path={getOrderDetails()}>
              <OrderDetail />
            </Route>

            <Route path={getShipment()}>
              <Shipment />
            </Route>

            <Route>Default route TBD</Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
