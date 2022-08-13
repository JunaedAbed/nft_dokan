import { View, Image, Text, ImageStore } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigatio = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.small,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={15} top={15} />
      </View>

      <SubInfo />
    </View>
  );
};

export default NFTCard;
