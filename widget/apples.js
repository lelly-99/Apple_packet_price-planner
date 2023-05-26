//input
var costPriceForBoxOfApples = document.querySelector(".costPriceForBoxOfApples")
var numberOfApplesInTheBox = document.querySelector(".numberOfApplesInTheBox")
var thePacketSizeApplesAreSoldIn = document.querySelector(".thePacketSizeApplesAreSoldIn")
var requiredProfit = document.querySelector(".requiredProfit")
//button
var calculateButton = document.querySelector(".calculateButton")
//ouput
var numberOfPackets = document.querySelector(".numberOfPackets")
var costPricePerApple = document.querySelector(".costPricePerApple")
var costPricePerPacket = document.querySelector(".costPricePerPacket")
var reccommendedPacketPrice = document.querySelector(".reccommendedPacketPrice")

var applePlanner = applePacketPricePlanner()
//event listener
calculateButton.addEventListener("click", function () {
    var costforBoxOfApples = Number(costPriceForBoxOfApples.value)
    var applesInTheBox = Number(numberOfApplesInTheBox.value)
    var packetSizeApplesAreSoldIn = Number(thePacketSizeApplesAreSoldIn.value)
    var profit = Number(requiredProfit.value)

    if (costPriceForBoxOfApples && applesInTheBox && packetSizeApplesAreSoldIn && profit) {
        costPricePerApple.innerHTML = (costforBoxOfApples / applesInTheBox).toFixed(2)
        costPricePerPacket.innerHTML = (costforBoxOfApples / packetSizeApplesAreSoldIn).toFixed(2)
        reccommendedPacketPrice.innerHTML = ((costforBoxOfApples / packetSizeApplesAreSoldIn) * profit).toFixed(2)
        numberOfPackets.innerHTML = (applesInTheBox / packetSizeApplesAreSoldIn).toFixed()
    }
})


