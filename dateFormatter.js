function dateFormat(format, value) {
  let result = "";

  const vDate = new Date(value);

  for (let i = 0; i < format.length; i++) {
    const element = format[i];
    if (element === "Y") result += vDate.getFullYear() + ",";

    if (element === "M")
      result +=
        vDate.getMonth().toString().length === 1
          ? "0" + (vDate.getMonth() + 1).toString() + ","
          : vDate.getMonth() + 1 + ",";

    if (element === "D")
      result +=
        vDate.getDate().toString().length === 1
          ? "0" + vDate.getDate().toString() + ","
          : vDate.getDate() + ",";

    if (element === "Y" && i === 2) result += " ";
    //Hour
    if (element === "H")
      result +=
        vDate.getHours().toString().length === 1
          ? "0" + vDate.getHours().toString() + ":"
          : vDate.getHours() + ":";
    if (element === "m")
      result +=
        vDate.getMinutes().toString().length === 1
          ? "0" + vDate.getMinutes().toString() + ":"
          : vDate.getMinutes() + ":";
    if (element === "S")
      result +=
        vDate.getSeconds().toString().length === 1
          ? "0" + vDate.getSeconds().toString()
          : vDate.getSeconds();

    if (element === " ") {
      result = result.substr(0, result.length - 2) + " ";
    }
  }
  if (format[format.length - 1] === "-") {
    result = result.replace(/,/g, "-");
  }

  if (format[format.length - 1] === ".") {
    result = result.replace(/,/g, ".");
  }
  return result;
}
