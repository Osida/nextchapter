import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { btnColor } from "../button/LinkBtnData";

const iconStyle = { color: "#6d6d6d", marginLeft: "0.2em" };

export function useProfileData(
  classes,
  values,
  handleInputChange,
  errors,
  student
) {
  const sections = [
    {
      section: "userProfile",
      title: "User Profile",
      description:
        "Your user profile information will be shown to other users.",
      icon: <AccountCircleIcon style={iconStyle} />,
      inputs: [
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "Display Name",
          name: "displayName",
          value: values.displayName,
          onChange: handleInputChange,
          error: errors.displayName,
          placeholder:
            student?.username !== "" ? student?.username : "username",
        },
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "University",
          name: "university",
          value: values.university,
          onChange: handleInputChange,
          error: errors.university,
          placeholder:
            student?.university !== "" ? student?.university : "university",
        },
      ],
    },
    {
      section: "personalDetails",
      title: "Personal",
      description: "Your personal information is never shown to other users.",
      icon: <LockIcon style={iconStyle} />,
      inputs: [
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "First Name",
          name: "firstName",
          value: values.firstName,
          onChange: handleInputChange,
          error: errors.firstName,
          placeholder:
            student?.firstName !== "" ? student?.firstName : "first name",
        },
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "Last Name",
          name: "lastName",
          value: values.lastName,
          onChange: handleInputChange,
          error: errors.lastName,
          placeholder:
            student?.lastName !== "" ? student?.lastName : "last name",
        },
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "Email",
          name: "email",
          value: values.email,
          onChange: handleInputChange,
          error: errors.email,
          placeholder:
            student?.email !== "" ? student?.email : "email@example.com",
        },
        {
          xs: 6,
          className: classes.inputBorder,
          variant: "outlined",
          label: "Phone Number",
          name: "mobile",
          value: values.mobile,
          onChange: handleInputChange,
          error: errors.mobile,
          placeholder:
            student?.phoneNumber !== "" ? student?.phoneNumber : "2435558888",
        },
      ],
    },
    {
      section: "password",
      title: "Password",
      description: "Leave password blank if you don’t want to change.",
      icon: <VpnKeyIcon style={iconStyle} />,
      inputs: [
        {
          xs: 12,
          className: classes.inputBorder,
          variant: "outlined",
          label: "Password",
          name: "password",
          value: values.password,
          onChange: handleInputChange,
          error: errors.password,
          placeholder: "Password",
        },
      ],
    },
    {
      section: "button",
      text: "Save changes",
      type: "Submit",
      color: btnColor.primary,
    },
  ];

  return {
    sections,
  };
}
