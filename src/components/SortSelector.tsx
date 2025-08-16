import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Icon,
  Button,
	Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	]
	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <MenuRoot>
			<Box position="relative">
				<MenuTrigger asChild>
					<Button variant="subtle">
						Order by: {currentSortOrder?.label || "Relevance"}
						<Icon as={BsChevronDown} ml={2} />
					</Button>
				</MenuTrigger>
				<MenuContent position="absolute">
					{sortOrders.map((order) => (
						<MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
							{order.label}
						</MenuItem>
					))}
				</MenuContent>
			</Box>
    </MenuRoot>
  );
};

export default SortSelector;
