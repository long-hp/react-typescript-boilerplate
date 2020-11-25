import React, { FC } from 'react';
import { View, Text, Button, Space, GridSmart, Image, Skeleton, TextUnderline, useResponsive, LineAwesome } from 'wiloke-react-core';
import Section from 'components/Section/Section';
import IconTextLarge from 'components/IconTextLarge/IconTextLarge';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Quote from 'components/Quote/Quote';
import { useSelector } from 'react-redux';
import { range } from 'ramda';
import { Endpoints } from 'types/Endpoints';
import Header from 'containers/Header/Header';
import { useGetTodolist } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolist = useGetTodolist();
  const { size, ref } = useResponsive({ maxWidth: 600 });

  const _getTodolist = () => {
    getTodolist.request({ endpoint: Endpoints.Todolist });
  };

  const _cancelTodolist = () => {
    getTodolist.cancel();
  };

  return (
    <View>
      <Header nightModeBlacklist="all" />
      <View tagName="main">
        <Section>
          <View container>
            <GridSmart columnWidth={450} columnCount={2} columnGap={30}>
              <View>
                <View ref={ref}>
                  <Text tagName="h2" color="dark1" size={size(66)}>
                    Lorem{' '}
                    <TextUnderline lineSize={size(25)} lineBottomSpace={size(50)} color="primary" lineColor="#e4e6e5">
                      Ipsum
                    </TextUnderline>{' '}
                    Dolor Sit Amet
                  </Text>
                  <Space size={size(40)} />
                  <Text size={18} color="dark3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quia animi inventore maxime voluptate asperiores laboriosam
                    voluptatum voluptas et? Ab inventore odio ipsa suscipit, consequuntur obcaecati corporis eaque ea dolorum?
                  </Text>
                  <Space size={size(40)} />
                </View>
                <GridSmart columnWidth={200} columnCount={2}>
                  <Button
                    loading={todolist.isLoading}
                    block
                    radius="round"
                    size="large"
                    backgroundColor="primary"
                    nightModeBlacklist="color"
                    onClick={_getTodolist}
                  >
                    Get Todolist
                  </Button>
                  <Button block radius="round" size="large" backgroundColor="gray2" color="dark2">
                    <View tachyons={['flex', 'items-center', 'justify-center']}>
                      <Text>Tutorial</Text>
                      <LineAwesome name="play" tachyons="ml3" size={22} color="tertiary" />
                    </View>
                  </Button>
                </GridSmart>
              </View>

              <Image src="https://image.freepik.com/free-vector/business-agreement-illustration-cartoon-happy-businessman-meeting-with-partner-shaking-hands-with-agreed-contract-document-white_213110-485.jpg" />
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb4', 'mb5-l']}
                title="Todolist API"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
              />
            </View>
            <View tachyons={['flex', 'justify-center', 'mb4']}>
              <Button
                loading={todolist.isLoading}
                radius="round"
                size="medium"
                backgroundColor="secondary"
                nightModeBlacklist="color"
                tachyons="mr2"
                onClick={_getTodolist}
              >
                Get Todolist
              </Button>
              <Button radius="round" size="medium" color="dark2" backgroundColor="gray2" tachyons="ml2" onClick={_cancelTodolist}>
                Cancel Todolist
              </Button>
            </View>
            <GridSmart columnWidth={200} columnCount={4}>
              {todolist.isLoading
                ? range(0, 8).map(item => {
                    return <Skeleton key={item} textNumberLines={2} imageAspectRatioPercent={56.25} />;
                  })
                : todolist.data.map(item => (
                    <View key={item.id} backgroundColor="gray2" tachyons="pa4">
                      {item.text}
                    </View>
                  ))}
            </GridSmart>
          </View>
        </Section>

        <Section backgroundColor="#F0F9FE" backgroundType="left">
          <View container>
            <View gridEqual colXs={2}>
              <View />
              <Quote
                quote="Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog."
                cite="Dustin Barnes"
              />
            </View>
          </View>
        </Section>

        <Space size={30} />

        <Section>
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb4', 'mb5-l']}
                title="Grid Smart"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
              />
            </View>
            <GridSmart columnWidth={200} columnCount={4} columnGap={20}>
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
              <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
            </GridSmart>
          </View>
        </Section>

        <Section backgroundColor="#FCF3EC">
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb4', 'mb5-l']}
                title="Màu background tự sét"
                text="Use one of 20.000+ templates and simple drag & drop design tools to help you create beautiful designs in minutes."
                nightModeBlacklist="all"
              />
            </View>
            <GridSmart columnWidth={300} columnCount={3}>
              <IconTextLarge
                iconColor="#FD9B9B"
                iconName="heart-o"
                title="Favorite Posts"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconTextLarge
                iconColor="#B06BF1"
                iconName="history"
                title="Recently Viewed"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconTextLarge
                iconColor="#45CCDB"
                iconName="archive"
                title="Awesome Mega Menu"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconTextLarge
                iconColor="#45CCDB"
                iconName="archive"
                title="Awesome Mega Menu"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconTextLarge
                iconColor="#45CCDB"
                iconName="archive"
                title="Awesome Mega Menu"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconTextLarge
                iconColor="#45db95"
                iconName="hourglass-end"
                title="Awesome Mega Menu"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <View backgroundColor="gray2" radius="round" tachyons={['flex-l', 'items-center', 'justify-between', 'pa5-l', 'pa4']}>
              <View>
                <Text tagName="h1">Hello</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?</Text>
              </View>
              <View tachyons={['mt3', 'mt0-l']}>
                <Button radius="round" backgroundColor="primary" tachyons="mr3" nightModeBlacklist="color">
                  Login
                </Button>
                <Button radius={10} backgroundColor="secondary" color="light" nightModeBlacklist="color">
                  Signup
                </Button>
              </View>
            </View>
          </View>
        </Section>

        <Section>
          <View container>
            <View
              backgroundColor="dark2"
              radius="round"
              tachyons={['flex-l', 'items-center', 'justify-between', 'pa5-l', 'pa4']}
              nightModeBlacklist="all"
            >
              <View>
                <Text tagName="h1" color="light" nightModeBlacklist="all">
                  Giữ màu khi bật nightMode
                </Text>
                <Text color="gray3" nightModeBlacklist="all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?
                </Text>
              </View>
              <View tachyons={['mt3', 'mt0-l']}>
                <Button radius="round" backgroundColor="primary" tachyons="mr3" nightModeBlacklist="all">
                  Login
                </Button>
                <Button radius={10} backgroundColor="secondary" color="light" nightModeBlacklist="all">
                  Signup
                </Button>
              </View>
            </View>
          </View>
        </Section>
      </View>
    </View>
  );
};

export default HomePage;
