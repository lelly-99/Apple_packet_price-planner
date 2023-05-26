function applePacketPricePlanner() {

    var costforBoxOfApples = 0
    var costPricePerApple = 0
    var costPricePerPacket = 0
    var reccommendedPacketPrice = 0
    var packetSizeApplesAreSoldIn = 0
    var costforBoxOfApples = 0
    var applesInTheBox = 0
    var recomprofit = 0


    function setcostforBoxOfApples(box) {
        costforBoxOfApples = box
        return costforBoxOfApples
    }

    function setpacketSizeApplesAreSoldIn(packet) {
        packetSizeApplesAreSoldIn = packet
        return packetSizeApplesAreSoldIn
    }

    function setapplesInTheBox(apples) {
        applesInTheBox = apples
        return applesInTheBox
    }

    function setprofit(profit) {
        recomprofit = profit
        return recomprofit
    }

    function getnumberOfPackets() {
        numberOfPackets = costforBoxOfApples / packetSizeApplesAreSoldIn
        return numberOfPackets.toFixed(2)
    }

    function getcostPricePerApple() {
        costPricePerApple = costforBoxOfApples / applesInTheBox
        return costPricePerApple.toFixed(2)
    }

    function getcostPricePerPacket() {
        costPricePerPacket = costforBoxOfApples / packetSizeApplesAreSoldIn
        return costPricePerPacket.toFixed(2)
    }

    function getReccommendedPacketPrice() {
        reccommendedPacketPrice = (costforBoxOfApples / packetSizeApplesAreSoldIn) * recomprofit
        return reccommendedPacketPrice.toFixed(2)
    }
    return {
        getnumberOfPackets,
        getcostPricePerApple,
        getcostPricePerPacket,
        getReccommendedPacketPrice,
        setpacketSizeApplesAreSoldIn,
        setcostforBoxOfApples,
        setapplesInTheBox,
        setprofit,
    }
}




