import React, { FC } from 'react';
import { View, Text, Button, Space, GridSmart, Image, Skeleton, TextUnderline, useResponsive, LineAwesome } from 'wiloke-react-core';
import Section from 'components/Section/Section';
import IconText from 'components/IconText/IconText';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';
import { range } from 'ramda';
import { Endpoints } from 'types/Endpoints';
import Header from 'containers/Header/Header';
import PostCard from 'components/PostCard/PostCard';
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
      <Header />
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
                    voluptatum voluptas et? Ab inventore odio ipsa suscipit?
                  </Text>
                  <Space size={size(40)} />
                </View>
                <View tachyons="mw6-l">
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
                tachyons={['tc', 'mb3', 'mb4-l']}
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

        <Section backgroundColor="gray2">
          <View container>
            <SectionTitle
              tachyons={['tl', 'mb3', 'mb4-l']}
              title="Popular Posts"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
            <GridSmart columnWidth={300} columnCount={4}>
              <PostCard
                imageSrc={`https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
                title="Contrary to popular"
                category="Travel"
              />
              <PostCard
                imageSrc={`https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
                title="There are many variations"
                category="Lifestyle"
              />
              <PostCard
                imageSrc={`https://images.pexels.com/photos/3575449/pexels-photo-3575449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
                title="All the Lorem Ipsum"
                category="Hotel"
              />
              <PostCard
                imageSrc={`https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
                title="It is a long established"
                category="Tech"
              />
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb3', 'mb4-l']}
                title="Gallery"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
              />
            </View>
            <GridSmart columnWidth={200} columnCount={4}>
              <Image src={`https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/2226900/pexels-photo-2226900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/941744/pexels-photo-941744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/3575449/pexels-photo-3575449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/3009324/pexels-photo-3009324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
              <Image src={`https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
            </GridSmart>
          </View>
        </Section>

        <Section backgroundColorNative="#FCF3EC">
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb3', 'mb4-l']}
                title="Màu background tự sét"
                text="Màu tự sét ( không thuộc màu sắc trong themes ) sẽ không thể tự động thay đổi theo nightMode"
                nightModeBlacklist="all"
              />
            </View>
            <GridSmart columnWidth={300} columnCount={3}>
              <IconText
                iconColor="#FD9B9B"
                iconName="heart-o"
                title="Adipisicing elit"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconText
                iconColor="#B06BF1"
                iconName="history"
                title="Latin literature"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconText
                iconColor="#45CCDB"
                iconName="info"
                title="Many variations"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconText
                iconColor="#e756d4"
                iconName="archive"
                title="Desktop publishing"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconText
                iconColor="#45CCDB"
                iconName="music"
                title="Veniam possimus"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, veniam possimus. Qui beatae enim aliquam culpa quia, ea dolorum aperiam temporibus?"
              />
              <IconText
                iconColor="#42266e"
                iconName="hourglass-end"
                title="Simply dummy"
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

        <Section>
          <View container>
            <View row tachyons="justify-center">
              <SectionTitle
                columns={[12, 10, 8]}
                tachyons={['tc', 'mb3', 'mb4-l']}
                title="Các màu social có sẵn"
                text="Có đủ các thể loại màu social có sẵn trong các components"
              />
            </View>
            <View tachyons={['flex', 'justify-center', 'items-center']}>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="facebook">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="facebook" tachyons="mr2" />
                    <Text>Facebook</Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="twitter">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="twitter" tachyons="mr2" />
                    <Text>Twitter</Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="dribbble">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="dribbble" tachyons="mr2" />
                    <Text>Dribbble</Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="youtube">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="youtube" tachyons="mr2" />
                    <Text>Youtube</Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="tumblr">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="tumblr" tachyons="mr2" />
                    <Text>Tumblr</Text>
                  </View>
                </Button>
              </View>
              <Text>Còn nữa...</Text>
            </View>
          </View>
        </Section>
      </View>
    </View>
  );
};

export default HomePage;
