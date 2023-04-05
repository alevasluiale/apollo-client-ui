import { Button } from "antd";
import { useState } from "react";
import RestaurantModal from "./RestaurantModal";
import { User } from "../../../utils/types";

function RestaurantList({ user }: { user: User }) {
  const [displayModal, setDisplayModal] = useState(false);

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
      />
    </div>
  );
}

export default RestaurantList;
