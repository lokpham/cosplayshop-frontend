import { MenuProps } from "antd";

export const convertDataToMenuAntd = (data: any) => {
  let items_init: MenuProps["items"] = [];

  if (data != null) {
    data.forEach((i: any) => {
      const item = convert(i);
      items_init.push(item);
    });
    return items_init;
  } else {
    return items_init;
  }
};

const convert = (d: any) => {
  let item: any = {
    key: d.id,
    label: d.name,
  };
  if (d.children.length > 0) {
    item.children = [];
    d.children.forEach((y: any) => {
      const child = convert(y);
      item.children = [...item.children, child];
    });
  }
  return item;
};
