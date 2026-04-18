//What is Event Handling?
//“Event handling means running some code when a user does an action like click, type, or scroll.”

//What is addEventListener?
//“addEventListener is used to listen to an event and run a function when that event happens.”

//Difference between onclick and addEventListener
//“onclick can handle only one event, but addEventListener can handle multiple events and is more flexible.”

//4. Why removeEventListener is used?
//“removeEventListener is used to stop listening to an event when it is no longer needed.”
element.removeEventListener("event", functionName);

//Difference between event.target and event.currentTarget
//“target is clicked element, currentTarget is listener element.”

//What is Event Bubbling?
//“Event bubbling means the event starts from the target element and goes up to its parent elements.”

//What is Event Capturing?
//“Event capturing means the event starts from the top parent and goes down to the target element.”

//By default, JavaScript uses bubbling.

//We can enable capturing by passing true in addEventListener.”

//To enable capturing:
//parent.addEventListener("click", fn, true);
//true → capturing mode
//false (default) → bubbling