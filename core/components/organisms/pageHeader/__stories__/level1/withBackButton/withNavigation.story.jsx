import * as React from 'react';
import { HorizontalNav, Button, AvatarGroup, Badge, Text, StatusHint, PageHeader, Dropdown } from '@/index';
import '../../style.css';

export const withNavigation = () => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4">few minutes ago</Text>
      <AvatarGroup className="mr-4" list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Dropdown menu={true} icon="more_horiz" options={options} />
      </div>
      <Button className="mr-4">Finish Later</Button>
      <Button appearance="primary" onClick={onClickHandler}>
        Next
      </Button>
    </div>
  );

  const badge = (
    <Badge appearance="success" subtle={true}>
      Sent
    </Badge>
  );
  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;
  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness"
        separator={false}
        navigationPosition="center"
        navigation={navigation}
        actions={actions}
        badge={badge}
        status={status}
        button={button}
      />
    </div>
  );
};

const customCode = `/*
// style.css
.Pageheader-longWrapper {
    width: 1200px;
}

*/

() => {
  const options = [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      label: 'Option 3',
      value: 'Option 3',
    },
  ];

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler} active={active} />;

  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Text className="mr-4">few minutes ago</Text>
      <AvatarGroup className="mr-4" list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom' }} />
      <div className="mr-4">
        <Dropdown menu={true} icon="more_horiz" options={options} />
      </div>
      <Button className="mr-4">Finish Later</Button>
      <Button appearance="primary" onClick={onClickHandler}>
        Next
      </Button>
    </div>
  );

  const badge = <Badge appearance="success" subtle={true}>Sent</Badge>;
  const button = <Button icon="arrow_back" size="tiny" largeIcon={true} />;
  const status = <StatusHint appearance="info">Ongoing</StatusHint>;

  return (
    <div className="bg-secondary-lightest Pageheader-longWrapper">
      <PageHeader
        title="Annual Wellness"
        separator={false}
        navigationPosition="center"
        navigation={navigation}
        actions={actions}
        badge={badge}
        status={status}
        button={button}
      />
    </div>
  );
}`;

export default {
  title: 'Layout/PageHeader/Level 1/With back button/With Navigation',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
