import Button from 'components/Button/Button';
import IconText from 'components/IconText/IconText';
import PostCard from 'components/PostCard/PostCard';
import Section from 'components/Section/Section';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import TextUnderline from 'components/TextUnderline';
import Header from 'containers/Header/Header';
import { range } from 'ramda';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Endpoints } from 'types/Endpoints';
import { GridSmart, Image, LineAwesome, Space, Text, useResponsive, useTheme, View } from 'wiloke-react-core';
import { useGetTodolist } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolist = useGetTodolist();
  const { size, ref } = useResponsive({ maxWidth: 600 });
  const { colors } = useTheme();

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
                  <Text tagName="h2" color="gray9" size={size(66)}>
                    <TextUnderline lineSize={size(20)} lineBottomSpace={size(43)} color="secondary" lineColor={`rgba(${colors.rgbSecondary}, 0.4)`}>
                      Lorem Ipsum
                    </TextUnderline>
                    Dolor Sit Amet
                  </Text>
                  <Space size={size(40)} />
                  <Text size={18} color="gray7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quia animi inventore maxime voluptate asperiores laboriosam
                    voluptatum voluptas et? Ab inventore odio ipsa suscipit?
                  </Text>
                  <Space size={size(40)} />
                </View>
                <View tachyons="mw6-l">
                  <GridSmart columnWidth={200} columnCount={2}>
                    <Button
                      loading={todolist.status === 'loading'}
                      block
                      radius="round"
                      size="large"
                      backgroundColor="primary"
                      nightModeBlacklist="color"
                      onClick={_getTodolist}
                    >
                      Get Todolist
                    </Button>
                    <Button block radius="round" size="large" backgroundColor="gray2" color="gray8">
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
                loading={todolist.status === 'loading'}
                radius="round"
                size="medium"
                backgroundColor="secondary"
                nightModeBlacklist="color"
                tachyons="mr2"
                onClick={_getTodolist}
              >
                Get Todolist
              </Button>
              <Button radius="round" size="medium" color="gray8" backgroundColor="gray2" tachyons="ml2" onClick={_cancelTodolist}>
                Cancel Todolist
              </Button>
            </View>
            <GridSmart columnWidth={200} columnCount={4}>
              {todolist.status === 'loading'
                ? range(0, 8).map(item => {
                    return <View key={item} backgroundColor="gray2" tachyons="pa4" />;
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
            <SectionTitle tachyons={['tl', 'mb3', 'mb4-l']} title="Popular Posts" text="Image test lazyload with previewSrc" />
            <GridSmart columnWidth={300} columnCount={4}>
              <PostCard.Loading />
              <PostCard
                previewSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv003-4x3.jpg"
                imageSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv003-1280x853.jpg"
                title="There are many variations"
                category="Lifestyle"
              />
              <PostCard
                previewSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv005-4x3.jpg"
                imageSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv005-1280x854.jpg"
                title="All the Lorem Ipsum"
                category="Hotel"
              />
              <PostCard
                previewSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv006-4x3.jpg"
                imageSrc="https://travel.highspeedblog.com/wp-content/uploads/sites/11/2020/06/tv006-1280x854.jpg"
                title="It is a long established"
                category="Tech"
              />
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <SectionTitle
              tachyons={['tc', 'mb3', 'mb4-l']}
              title="Theme Colors"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
            <Text tagName="h3" tachyons="mb3">
              Color Primary, Secondary, Quaternary, Tertiary, Quinary
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="primary" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: primary | scss: $color-primary
              </View>
              <View backgroundColor="secondary" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: secondary | scss: $color-secondary
              </View>
              <View backgroundColor="quaternary" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: quaternary | scss: $color-quaternary
              </View>
              <View backgroundColor="tertiary" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: tertiary | scss: $color-tertiary
              </View>
              <View backgroundColor="quinary" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: quinary | scss: $color-quinary
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" tachyons="mb3">
              Color Warning, Danger...
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="danger" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: danger | scss: $color-danger
              </View>
              <View backgroundColor="warning" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: warning | scss: $color-warning
              </View>
              <View backgroundColor="success" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: success | scss: $color-success
              </View>
              <View backgroundColor="info" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: info | scss: $color-info
              </View>
              <View backgroundColor="heart" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: heart | scss: $color-heart
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" tachyons="mb3">
              Color Social
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="facebook" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: facebook | scss: $color-facebook
              </View>
              <View backgroundColor="twitter" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: twitter | scss: $color-twitter
              </View>
              <View backgroundColor="dribbble" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: dribbble | scss: $color-dribbble
              </View>
              <View backgroundColor="youtube" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: youtube | scss: $color-youtube
              </View>
              <View backgroundColor="instagram" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: instagram | scss: $color-instagram
              </View>
              <View backgroundColor="tumblr" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: tumblr | scss: $color-tumblr
              </View>
              <View backgroundColor="vimeo" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: vimeo | scss: $color-vimeo
              </View>
              <View backgroundColor="vk" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: vk | scss: $color-vk
              </View>
              <View backgroundColor="digg" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: digg | scss: $color-digg
              </View>
              <View backgroundColor="github" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: github | scss: $color-github
              </View>
              <View backgroundColor="linkedin" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: linkedin | scss: $color-linkedin
              </View>
              <View backgroundColor="reddit" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: reddit | scss: $color-reddit
              </View>
              <View backgroundColor="stumbleupon" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: stumbleupon | scss: $color-stumbleupon
              </View>
              <View backgroundColor="pinterest" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: pinterest | scss: $color-pinterest
              </View>
              <View backgroundColor="behance" color="light" tachyons={['ph3', 'pv4']} radius="round" nightModeBlacklist="all">
                react: behance | scss: $color-behance
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" tachyons="mb3">
              Color Gray, Dark, Light
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="transparent" tachyons={['ph3', 'pv4']} radius="round">
                react: transparent | scss: $color-transparent
              </View>
              <View backgroundColor="light" tachyons={['ph3', 'pv4']} radius="round">
                react: light | scss: $color-light
              </View>
              <View backgroundColor="gray1" tachyons={['ph3', 'pv4']} radius="round">
                react: gray1 | scss: $color-gray-1
              </View>
              <View backgroundColor="gray2" tachyons={['ph3', 'pv4']} radius="round">
                react: gray2 | scss: $color-gray-2
              </View>
              <View backgroundColor="gray3" tachyons={['ph3', 'pv4']} radius="round">
                react: gray3 | scss: $color-gray-3
              </View>
              <View backgroundColor="gray4" tachyons={['ph3', 'pv4']} radius="round">
                react: gray4 | scss: $color-gray-4
              </View>
              <View backgroundColor="gray5" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: gray5 | scss: $color-gray-5
              </View>
              <View backgroundColor="gray6" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: gray6 | scss: $color-gray-6
              </View>
              <View backgroundColor="gray7" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: gray7 | scss: $color-gray-7
              </View>
              <View backgroundColor="gray8" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: gray8 | scss: $color-gray-8
              </View>
              <View backgroundColor="gray9" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: gray9 | scss: $color-gray-9
              </View>
              <View backgroundColor="dark" color="light" tachyons={['ph3', 'pv4']} radius="round">
                react: dark | scss: $color-dark
              </View>
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <SectionTitle
              tachyons={['tc', 'mb3', 'mb4-l']}
              title="Font Family"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
            <Text fontFamily="primary" tagName="h2" tachyons="mb4">
              Font Primary: prop: fontfamily="primary" | scss: $font-primary
            </Text>
            <Text fontFamily="secondary" tagName="h2" tachyons="mb4">
              Font Secondary: prop: fontfamily="secondary" | scss: $font-secondary
            </Text>
            <Text fontFamily="tertiary" tagName="h2" tachyons="mb4">
              Font Tertiary: prop: fontfamily="tertiary" | scss: $font-tertiary
            </Text>
            <Text fontFamily="quaternary" tagName="h2" tachyons="mb4">
              Font Quaternary: prop: fontfamily="quaternary" | scss: $font-quaternary
            </Text>
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
              backgroundColor="gray8"
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
                title="Test socials"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?"
              />
            </View>
            <View tachyons={['flex', 'flex-wrap', 'justify-center', 'items-center']}>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="facebook">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="facebook" tachyons="mr2" color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Facebook
                    </Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="twitter">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="twitter" tachyons="mr2" color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Twitter
                    </Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="dribbble">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="dribbble" tachyons="mr2" color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Dribbble
                    </Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="youtube">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="youtube" tachyons="mr2" color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Youtube
                    </Text>
                  </View>
                </Button>
              </View>
              <View tachyons="pa1">
                <Button radius="round" backgroundColor="tumblr">
                  <View tachyons={['flex', 'flex-row', 'justify-center', 'items-center']}>
                    <LineAwesome name="tumblr" tachyons="mr2" color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Tumblr
                    </Text>
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
