import { toast } from "react-toastify";
import Base from "../components/Base";
import { Button } from "react-bootstrap";
import axios from "axios";
function Index() {
  function showSuccessToast() {
    toast.success("This is a success toast!", {
      position: "bottom-center",
      theme: "dark",
    });
  }

  const getDataFromServer = () => {
    toast.info("Fetching data from server...", {
      position: "bottom-center",
      theme: "dark",
    });

    axios
      .get(
        "http://localhost:9090/users?sortBy=name&sortDir=desc&pageNumber=1&pageSize=10"
      )
      .then((response) => {
        console.log("Data from server:", response.data);
        toast.success("Data fetched successfully!", {
          position: "bottom-center",
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data from server.", {
          position: "bottom-center",
          theme: "dark",
        });
      })
      .finally(() => {
        toast.dismiss(); // Dismiss the info toast
      });
  };

  return (
    <Base
      title="Show what you need"
      description="Welcome to Trending store, We provide best items as you need."
      buttonEnabled={true}
      buttonText="Start Shopping"
      buttonType="primary"
    >
      <h1>Working on home page</h1>
      <p>
        m is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Why do we use it? It is a long established fact that a reader
        will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </p>
      <Button variant="success" onClick={showSuccessToast}>
        Tostify Success
      </Button>
      <Button variant="primary" onClick={getDataFromServer}>
        Get data from fake API
      </Button>
      <p>
        m is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Why do we use it? It is a long established fact that a reader
        will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </p>
      <br></br>
      <p>
        m is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Why do we use it? It is a long established fact that a reader
        will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </p>
    </Base>
  );
}

export default Index;
