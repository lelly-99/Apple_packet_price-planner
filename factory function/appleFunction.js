function applePacketPricePlanner(){

    var costforBoxOfApples = 0
    var costPricePerApple = 0
    var costPricePerPacket = 0
    var reccommendedPacketPrice = 0

    function getnumberOfPackets(){
        numberOfPackets = costforBoxOfApples/packetSizeApplesAreSoldIn
        return numberOfPackets.toFixed(2)
    }

    function getcostPricePerApple(){
        costPricePerApple = costforBoxOfApples/applesInTheBox
        return costPricePerApple.toFixed(2)
    }

    function getcostPricePerPacket(){
        costPricePerPacket = costforBoxOfApples/packetSizeApplesAreSoldIn
        return costPricePerPacket.toFixed(2)
    }

    function getReccommendedPacketPrice(){
        reccommendedPacketPrice = (costforBoxOfApples/packetSizeApplesAreSoldIn)*profit
        return reccommendedPacketPrice.toFixed(2)
    }
    return {
        getnumberOfPackets,
        getcostPricePerApple,
        getcostPricePerPacket,
        getReccommendedPacketPrice 
    }
}



    
