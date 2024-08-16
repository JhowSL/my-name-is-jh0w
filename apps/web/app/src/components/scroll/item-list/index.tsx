import React from "react";
import { generateKey } from "../../../utils/generate-key";

interface ItemListProps {
	items: React.ReactNode[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<React.Fragment key={generateKey()}>{item}</React.Fragment>
			))}
		</>
	);
};

export default ItemList;
