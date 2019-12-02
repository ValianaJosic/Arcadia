import ReactOnRails from "react-on-rails";

import Splash from "../bundles/Splash/components/Splash";
import Prescription from "../bundles/Prescription/Prescription";
import Home from "../bundles/Home/components/Home";
import EventForm from "../bundles/Event/components/EventForm";
import SignUpForm from "../bundles/SignUpForm/SignUpForm";
import Agenda from "../bundles/Agenda/components/Agenda";
import Calendar from "../bundles/Calendar/components/Calendar";
import FAB from "../bundles/Fab/components/FAB";

ReactOnRails.register({
  Prescription,
  EventForm,
  Home,
  SignUpForm,
  Agenda,
  Calendar,
  FAB,
  Splash
});