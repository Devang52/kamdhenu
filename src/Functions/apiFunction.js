import axios from "axios";
import Swal from "sweetalert2";

const GET = async (token, url) => {
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// const ADD = async (token, url, data) => {
//   var config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: url,
//     headers: {
//       Authorization: token,
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };
//   try {
//     const response = await axios(config);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };
const ADD = async (token, url, data, navigateToPath, path, setLoader, alert) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    if (response.status === 200 && response.data) {
      Swal.fire({
        icon: "success",
        title: `${alert} Inserted Successfully`,
        timer: 1500,
      }).then(() => {
        navigateToPath(path);
      });
    } else {
      Swal.fire({
        title: `${alert} Inserted Failed`,
        icon: "error",
      });
    }
    return response.data;
  } catch (error) {
    console.error(error);
    setLoader(true)
    return error;
  }
};

const ADDMulti = async (token, url, data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const UPDATE = async (token, url, data, navigateToPath, path, setLoader, alert) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    if (response.status === 200 && response.data) {
      Swal.fire({
        icon: "success",
        title: `${alert} Updated Successfully`,
        timer: 1000,
      }).then(() => {
        navigateToPath(path);
      });
    } else {
      Swal.fire({
        title: `${alert} Update Failed`,
        icon: "error",
      });
    }
    return response.data;
  } catch (error) {
    console.error(error);
    setLoader(true)
    return error;
  }
};

const DELETE = async (token, url, data, alert) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this ${alert}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5000C0",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const response = await axios(config);
      if (response.status === 200 && response.data) {
        Swal.fire({
          title: "Deleted!",
          text: `This ${alert} has been deleted.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Deleted failed!",
          text: `${alert} deleted failed.`,
          icon: "error",
        });
      }
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

const UPLOAD = async (token, url, data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { GET, ADD, DELETE, UPDATE, UPLOAD, ADDMulti };
