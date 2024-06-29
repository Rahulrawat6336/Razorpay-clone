import PaymentComponent from "./PaymentComponent";
import PaymentComponent1 from "./PaymentComponent1";
import PaymentComponent2 from "./PaymentComponent2";
import PaymentComponent3 from "./PaymentComponent3";
import { useStyle } from "./ScrollCss";

//  implement stacking cards scrolling effect in react js 

export default function ScrollComponents() {
    var classes = useStyle()
    return (<div style={{background:'whitesmoke'}}>
        <div className={classes.body}>
            <div>

                <div className={classes.card}>
                    <PaymentComponent1 head={'Accept Payments'} />

                </div>
                <div className={classes.card}>
                    <PaymentComponent head={'Make Payouts'} />

                </div>
                <div className={classes.card}>
                    <PaymentComponent2 head={'Start Business Banking'} />

                </div>
                <div className={classes.card}>
                    <PaymentComponent3 head={'Automate Payroll'} />

                </div>
            </div>
        </div>

    </div>
    )
}