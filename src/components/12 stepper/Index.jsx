import { Stepper } from "./Stepper";
import "./index.css";

const steps = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payment",
    component: () => <div>Complete payment procedure</div>,
  },
  {
    name: "Order Placed",
    component: () => <div>Your order is successfully placed.</div>,
  },
];
const Index = () => {
  return (
    <div className="container">
      <h1>Stepper</h1>
      <Stepper steps={steps} />
    </div>
  );
};

export default Index;
