import { Formik, Form, ErrorMessage } from "formik";
import { Button, Input, Modal, TreeSelect } from "antd";
import * as Yup from "yup";
import { Meal, User } from "../../../utils/types";
import { useFetchAllMeals } from "../../meals/hooks/useFetchAllMeals";
import { useAddRestaurant } from "../hooks/useAddRestaurant";
import { useLocalStorage } from "usehooks-ts";

type RestaurantModalProps = {
  visible: boolean;
  closeModal: () => void;
};

function RestaurantModal({ visible, closeModal }: RestaurantModalProps) {
  const [user] = useLocalStorage("user", null as User);
  const {
    addRestaurant,
    error: addRestaurantError,
    loading: addRestaurantLoading,
  } = useAddRestaurant();

  const {
    meals,
    error: mealsError,
    loading: mealsLoading,
  } = useFetchAllMeals();

  console.log(meals);

  return (
    <Modal
      visible={visible}
      title="Add restaurant"
      footer={[
        <Button form="addRestaurantForm" key="submit" htmlType="submit">
          Add
        </Button>,
        <Button onClick={closeModal}>Cancel</Button>,
      ]}
    >
      <Formik
        initialValues={{
          description: undefined as unknown as string,
          name: undefined as unknown as string,
          mealsIds: undefined as unknown as Array<string>,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          mealsIds: Yup.array().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          addRestaurant(values, user?.id || "");
        }}
      >
        {(props) => (
          <Form id="addRestaurantForm" className="unselectable">
            <Input
              className="mb-2 rounded"
              value={props.values.name}
              placeholder="Name"
              name="name"
              onChange={(e) => props.setFieldValue("name", e.target.value)}
            />
            <ErrorMessage component="div" className="error" name="name" />
            <Input
              className="mb-2 rounded"
              value={props.values.description}
              placeholder="Description"
              name="description"
              onChange={(e) =>
                props.setFieldValue("description", e.target.value)
              }
            />
            <ErrorMessage
              component="div"
              className="error"
              name="description"
            />
            <TreeSelect
              showSearch
              className="mb-2 rounded"
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={meals?.map((meal: Meal) => {
                return {
                  title: meal.name,
                  value: meal.id,
                  key: meal.id,
                };
              })}
              placeholder="Select meals"
              allowClear
              treeCheckable={true}
              showCheckedStrategy="SHOW_PARENT"
              treeDefaultExpandAll
              value={props.values.mealsIds}
              onChange={(value) => props.setFieldValue("mealsIds", value)}
            />
            <ErrorMessage component="div" className="error" name="mealsIds" />
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default RestaurantModal;
