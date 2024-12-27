import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCard from "./components/DashboardCard";
import ChartCard from "./components/ChartCard";
import Calendar from "./components/Calendar";
import UserCard from "./components/UserCard";

import Appointment from "./components/sections/Appointment";
import Biiling from "./components/sections/Biiling";
import Dashboard from "./components/sections/Dashboard";
import Pharmacy from "./components/sections/Pharmacy";
import Pathology from "./components/sections/Pathology";
import Radiology from "./components/sections/Radiology";
import Opd from "./components/sections/Opd";

import Notification from "./Notification";
import Ambulance from "./components/Ambulance";
import Birthrecord from "./components/Birthrecord";
import Deathrecord from "./components/Deathrecord";
import Dutyroster from "./components/Dutyroster";
import Expense from "./components/Expense";
import Frontoffice from "./components/Frontoffice";
import Ipd from "./components/Ipd";
import Income from "./components/Income";
import Referral from "./components/Referral";
import Tpamanagement from "./components/Tpamanagement";
import Bloodbank from "./components/Bloodbank";
import Humanresource from "./components/Humanresource";

import Setup from "./components/Setup";
import G_setting from "./components/G_setting";
import Attendance_settings from "./components/Setup/Attendance_settings";
import Notifications_setings from "./components/Setup/Notifications_setings";
import System_update from "./components/Setup/System_update";
import Captcha_settings from "./components/Setup/Captcha_settings";
import Modules from "./components/Setup/Modules";
import Users from "./components/Setup/Users";
import Languages from "./components/Setup/Languages";
import Backuprestore from "./components/Setup/Backuprestore";
import Rolesandpermisisons from "./components/Setup/Rolesandpermisisons";
import Prefix_settings from "./components/Setup/Prefix_settings";
import Front_cms_settings from "./components/Setup/Front_cms_settings";
import Payments_methods from "./components/Setup/Payments_methods";
import Email_settings from "./components/Setup/Email_settings";
import Sms_settings from "./components/Setup/Sms_settings";
import System_notifi_settings from "./components/Setup/System_notifi_settings";

import "./App.css";

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Topbar />
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Appointments & Scheduling */}
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/duty-roster" element={<Dutyroster />} />

        {/* Billing & Finance */}
        <Route path="/billing" element={<Biiling />} />
        <Route path="/finance/income" element={<Income />} />
        <Route path="/finance/expenses" element={<Expense />} />

        {/* Medical Services */}
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/opd" element={<Opd />} />
        <Route path="/ipd" element={<Ipd />} />
        <Route path="/blood-bank" element={<Bloodbank />} />
        <Route path="/ambulance" element={<Ambulance />} />

        {/* Records */}
        <Route path="/b&drecords/birth-record" element={<Birthrecord />} />
        <Route path="/b&drecords/death-record" element={<Deathrecord />} />

        {/* Human Resources */}
        <Route path="/human-resource" element={<Humanresource />} />
        <Route path="/front-office" element={<Frontoffice />} />

        {/* Referrals & Third-Party Management */}
        <Route path="/referral" element={<Referral />} />
        <Route path="/tpamanagement" element={<Tpamanagement />} />

        {/* Notifications */}
        <Route path="/notifications" element={<Notification />} />

        {/* General Setup */}
        <Route path="/setup" element={<Setup />} />
        <Route path="/setup/settings/general" element={<G_setting />} />
        <Route path="/setup/settings/attendance" element={<Attendance_settings />} />
        <Route path="/setup/settings/notification" element={<Notifications_setings />} />
        <Route path="/setup/settings/system-update" element={<System_update />} />
        <Route path="/setup/settings/modules" element={<Modules />} />
        <Route path="/setup/settings/captcha" element={<Captcha_settings />} />
        <Route path="/setup/settings/users" element={<Users />} />
        <Route path="/setup/settings/languages" element={<Languages />} />
        <Route path="/setup/settings/backup-restore" element={<Backuprestore />} />
        <Route path="/setup/settings/roles-permissions" element={<Rolesandpermisisons />} />
        <Route path="/setup/settings/prefix" element={<Prefix_settings />} />
        <Route path="/setup/settings/front-cms" element={<Front_cms_settings />} />
        <Route path="/setup/settings/payment-methods" element={<Payments_methods />} />
        <Route path="/setup/settings/email" element={<Email_settings />} />
        <Route path="/setup/settings/sms" element={<Sms_settings />} />
        <Route path="/setup/settings/system-notification" element={<System_notifi_settings />} />

        {/* Fallback Route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  </div>
);

export default App;
