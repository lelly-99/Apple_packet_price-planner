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
    var costForBoxOfApples = costPriceForBoxOfApples.value
    var applesInTheBox = numberOfApplesInTheBox.value
    var packetSizeApplesAreSoldIn = thePacketSizeApplesAreSoldIn.value
    var profit = requiredProfit.value
    

    if (costForBoxOfApples && applesInTheBox && packetSizeApplesAreSoldIn && profit) {
        applePlanner.setcostforBoxOfApples(costForBoxOfApples)
        applePlanner.setpacketSizeApplesAreSoldIn(applesInTheBox)
        applePlanner.setapplesInTheBox(packetSizeApplesAreSoldIn)
        applePlanner.setprofit(profit)

        costPricePerApple.innerHTML = applePlanner.getcostPricePerApple()
        costPricePerPacket.innerHTML = applePlanner.getcostPricePerPacket()
        reccommendedPacketPrice.innerHTML = applePlanner.getReccommendedPacketPrice()
        numberOfPackets.innerHTML = applePlanner.getnumberOfPackets()
    }
})


