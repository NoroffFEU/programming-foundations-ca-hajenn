# Programming Foundations CA

<h3> First one ( the main one ) </h3>
<p> This one have 1 object in it </p>

<a href="https://github.com/NoroffFEU/programming-foundations-ca-hajenn/blob/master/js/dashboard.js"> dashboard.js </a>

<ol>
    <li> -Speedometer ( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> min ( Number ) indicating minimum speed </li>
        <li> max ( Number ) indicating maximum speed </li>
        <li> min ( String ) unit measurement </li>
        <li> updateValue ( Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
       <li> -TempratureGauge ( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> min ( Number ) indicating minimum temperature </li>
        <li> max ( Number ) indicating maximum temperature </li>
        <li> min ( String ) unit measurement </li>
        <li> updateValue ( Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
           <li> -FuelGauge ( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> min ( Number ) indicating minimum fuel</li>
        <li> max ( Number ) indicating maximum fuel</li>
        <li> min ( String ) unit measurement </li>
        <li> updateValue ( Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
           <li> -Odometer( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> min ( Number ) indicating minimum speed </li>
        <li> max ( Number ) indicating maximum speed </li>
        <li> min ( String ) unit measurement </li>
        <li> updateValue ( Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
            <li> -Cruise Control( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> turned on ( Boolean ) displaying led light if true </li>
        <li> turned off ( Boolean )  displaying led light if false  </li>
        <li> updateValue ( Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
            <li> -Warning Lights( Child Object)  </li>
    <ul>
        <li> value ( Number ) showing nothing or 0 if nothing is plotted in </li>
        <li> Type of signals indicators ( String[] ) list of some signals or led lamps you might get on your dashboard </li>
        <li> updateValue ( Function (Parameter), Function (Parameter) ) updating the value if certain conditionals is true or false  </li>
    </ul>
            <li> -Sensors ( Child Object Array )  </li>
    <ul>
        <li> sensor types usually connected via wires  ( Array ) showing different types of sensors  </li>
    </ul>
            <li> -UpdateAll( Functions(6 Parameters) ) this plots in values and sends it the dashboard display if the parameter is equal  
             to the objects value
            </li>
    <ul>
        <li> sensor types ( Array ) different sensors that could be connected to the dashboard, with properties that detects if something is lost or
        is running for troubleshooting  </li>
    </ul>
</ol>

<h3> Second one ( extra ) </h3>
<p> This one have more than just 1 object in it </p>

<a href="https://github.com/NoroffFEU/programming-foundations-ca-hajenn/blob/master/js/toyota.js"> toyota.js </a>
