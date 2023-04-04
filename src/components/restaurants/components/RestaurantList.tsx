import { useTypedSelector } from "../../../redux/useTypedSelector";
import { Button } from "antd";
import { useState } from "react";
import RestaurantModal from "./RestaurantModal";
import { useFetchAllMeals } from "../../meals/hooks/useFetchAllMeals";

function RestaurantList() {
  const user = useTypedSelector((store) => store.authentication.user);
  const [displayModal, setDisplayModal] = useState(false);

  const {
    meals,
    error: mealsError,
    loading: mealsLoading,
  } = useFetchAllMeals();

  console.log(meals);
  return (
    <div>
      <Button
        className="unselectable rounded mb-4 mx-auto"
        type="primary"
        onClick={() => setDisplayModal(true)}
      >
        Add restaurant
      </Button>

      <RestaurantModal
        visible={displayModal}
        closeModal={() => setDisplayModal(false)}
        meals={[]}
      />
    </div>
  );
}

export default RestaurantList;
