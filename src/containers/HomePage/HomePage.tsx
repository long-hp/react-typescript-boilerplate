import React, { FC } from 'react';
import { View, Text, Button, Space, GridSmart, Image, Skeleton } from 'wiloke-react-core';
import Section from 'components/Section/Section';
import IconTextLarge from 'components/IconTextLarge/IconTextLarge';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Quote from 'components/Quote/Quote';
import { useSelector } from 'react-redux';
import { range } from 'ramda';
import SectionHero from './SectionHero';
import { useGetTodolistRequest } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolist = useGetTodolistRequest();

  return (
    <View tagName="main">
      <SectionHero />

      <Section>
        <View container>
          <View row tachyons="justify-center">
            <SectionTitle
              columns={[12, 10, 8]}
              tachyons={['tc', 'mb5']}
              title="Todolist"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
          </View>
          <View tachyons={['flex', 'justify-center']}>
            <Button
              loading={todolist.isLoading}
              radius="round"
              size="medium"
              backgroundColor="secondary"
              nightModeBlacklist="color"
              tachyons="mb3"
              onClick={() => {
                getTodolist({ endpoint: 'todolist' });
              }}
            >
              Get Todolist
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
              tachyons={['tc', 'mb5']}
              title="Grid Smart"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
          </View>
          <GridSmart columnWidth={200} columnCount={4}>
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
              tachyons={['tc', 'mb5']}
              title="What will you design today?"
              text="Use one of 20.000+ templates and simple drag & drop design tools to help you create beautiful designs in minutes."
              nightModeBlacklist="all"
            />
          </View>
          <View gridEqual colXs={3}>
            <IconTextLarge
              iconColor="#FD9B9B"
              iconName="heart-o"
              title="Favorite Posts"
              text="It's a useful feature for your customers: They can SAVE an useful article and easily reach it in future under Favorite Store."
            />
            <IconTextLarge
              iconColor="#B06BF1"
              iconName="history"
              title="Recently Viewed"
              text="Every time visits an article, HSBlog will remember it. Customers can easily reach it next time under Recently Reviewed area."
            />
            <IconTextLarge
              iconColor="#45CCDB"
              iconName="archive"
              title="Awesome Mega Menu"
              text="A useful feature helps you can add more information to your menu but still keep it simple and clean"
            />
            <IconTextLarge
              iconColor="#45CCDB"
              iconName="archive"
              title="Awesome Mega Menu"
              text="A useful feature helps you can add more information to your menu but still keep it simple and clean"
            />
            <IconTextLarge
              iconColor="#45CCDB"
              iconName="archive"
              title="Awesome Mega Menu"
              text="A useful feature helps you can add more information to your menu but still keep it simple and clean"
            />
          </View>
        </View>
      </Section>

      <Section>
        <View container>
          <View backgroundColor="gray2" radius="round" tachyons={['flex', 'items-center', 'justify-between', 'pa5']}>
            <View>
              <Text tagName="h1">Hello</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?</Text>
            </View>
            <View>
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
          <View backgroundColor="dark2" radius="round" tachyons={['flex', 'items-center', 'justify-between', 'pa5']} nightModeBlacklist="all">
            <View>
              <Text tagName="h1" color="light" nightModeBlacklist="all">
                Hello
              </Text>
              <Text color="gray3" nightModeBlacklist="all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?
              </Text>
            </View>
            <View>
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
  );
};

export default HomePage;
