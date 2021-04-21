import React, { FC } from 'react';
import { range } from 'ramda';
import { useSelector } from 'react-redux';
import { Endpoints } from 'types/Endpoints';
import { GridSmart, Image, LineAwesome, Space, Text, useResponsive, useTheme, View } from 'wiloke-react-core';
import Button from 'components/Button';
import IconText from 'components/IconText';
import PostCard from 'components/PostCard';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import TextUnderline from 'components/TextUnderline';
import Header from 'containers/Header/Header';
import { useHistory } from 'react-router';
import { useGetTodolist } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const HomePage: FC = () => {
  const todolist = useSelector(todolistSelector);
  const getTodolist = useGetTodolist();
  const { size, ref } = useResponsive({ maxWidth: 600 });
  const { colors } = useTheme();
  const history = useHistory();
  history.push('/anotherPage', { anotherPage: '1' });
  history.push('/anotherPage?q1=q1&q2=q2#hash=abc', { anotherPage: '1' });
  history.push('/anotherPagezczxc?q1=q1&q2=q2#hash=abc', "Can't match any route");
  history.push('/anotherPagezxcv', "Can't match any route");
  history.push('/abc/', { anotherPage2Id: 'abc' });
  history.push('/anotherPage/', { anotherPageId: 'abc' });
  history.push('/anotherPage/abcxyz?q1=q1&...zxcyc#sad', { anotherPageId: 'abc' });
  history.push('/abc', "Can't match any route");
  history.push('/', { homePage: '123' });
  history.push('/login/abc/xz', { loginPage: 'abc' });

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
                    <TextUnderline
                      lineSize={size(20)}
                      lineBottomSpace={size(43)}
                      textColor="secondary"
                      lineColor={`rgba(${colors.rgbSecondary}, 0.4)`}
                    >
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
                <GridSmart columnWidth={200} columnCount={2}>
                  <Button
                    loading={todolist.status === 'loading'}
                    block
                    radius={10}
                    size="large"
                    backgroundColor="primary"
                    nightModeBlacklist="color"
                    onClick={_getTodolist}
                  >
                    Get Todolist
                  </Button>
                  <Button block radius={10} size="large" backgroundColor="gray2" color="gray8">
                    <View css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Text>Tutorial</Text>
                      <LineAwesome name="play" css={{ marginLeft: '5px' }} size={22} color="tertiary" />
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
            <View row css={{ justifyContent: 'center' }}>
              <SectionTitle
                columns={[12, 10, 8]}
                css={{ textAlign: 'center', marginBottom: '18px' }}
                title="Todolist API"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
              />
            </View>
            <View css={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
              <Button
                loading={todolist.status === 'loading'}
                radius={10}
                size="medium"
                backgroundColor="secondary"
                nightModeBlacklist="color"
                css={{ marginRight: '8px' }}
                onClick={_getTodolist}
              >
                Get Todolist
              </Button>
              <Button radius={10} size="medium" color="gray8" backgroundColor="gray2" css={{ marginLeft: '8px' }} onClick={_cancelTodolist}>
                Cancel Todolist
              </Button>
            </View>
            <GridSmart columnWidth={200} columnCount={4}>
              {todolist.status === 'loading'
                ? range(0, 8).map(item => {
                    return <View key={item} backgroundColor="gray2" css={{ padding: '20px' }} />;
                  })
                : todolist.data.map(item => (
                    <View key={item.id} backgroundColor="gray2" css={{ padding: '20px' }}>
                      {item.text}
                    </View>
                  ))}
            </GridSmart>
          </View>
        </Section>

        <Section backgroundColor="gray2">
          <View container>
            <SectionTitle css={{ textAlign: 'left', marginBottom: '18px' }} title="Popular Posts" text="Image test lazyload with previewSrc" />
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
              css={{ textAlign: 'center', marginBottom: '18px' }}
              title="Theme Colors"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
            <Text tagName="h3" css={{ marginBottom: '15px' }}>
              Color Primary, Secondary, Quaternary, Tertiary, Quinary
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="primary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                primary
              </View>
              <View backgroundColor="secondary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                secondary
              </View>
              <View backgroundColor="quaternary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                quaternary
              </View>
              <View backgroundColor="tertiary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                tertiary
              </View>
              <View backgroundColor="quinary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                quinary
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" css={{ marginBottom: '15px' }}>
              Color Warning, Danger...
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="danger" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                danger
              </View>
              <View backgroundColor="warning" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                warning
              </View>
              <View backgroundColor="success" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                success
              </View>
              <View backgroundColor="info" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                info
              </View>
              <View backgroundColor="heart" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                heart
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" css={{ marginBottom: '15px' }}>
              Color Social
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="facebook" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                facebook
              </View>
              <View backgroundColor="twitter" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                twitter
              </View>
              <View backgroundColor="dribbble" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                dribbble
              </View>
              <View backgroundColor="youtube" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                youtube
              </View>
              <View backgroundColor="instagram" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                instagram
              </View>
              <View backgroundColor="tumblr" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                tumblr
              </View>
              <View backgroundColor="vimeo" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                vimeo
              </View>
              <View backgroundColor="vk" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                vk
              </View>
              <View backgroundColor="digg" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                digg
              </View>
              <View backgroundColor="github" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                github
              </View>
              <View backgroundColor="linkedin" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                linkedin
              </View>
              <View backgroundColor="reddit" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                reddit
              </View>
              <View backgroundColor="stumbleupon" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                stumbleupon
              </View>
              <View backgroundColor="pinterest" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                pinterest
              </View>
              <View backgroundColor="behance" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
                behance
              </View>
            </GridSmart>
            <Space size={30} />
            <Text tagName="h3" css={{ marginBottom: '15px' }}>
              Color Gray, Dark, Light
            </Text>
            <GridSmart columnWidth={300} columnCount={3}>
              <View backgroundColor="transparent" css={{ padding: '20px 30px' }} radius={10}>
                transparent
              </View>
              <View backgroundColor="light" css={{ padding: '20px 30px' }} radius={10}>
                light
              </View>
              <View backgroundColor="gray1" css={{ padding: '20px 30px' }} radius={10}>
                gray1
              </View>
              <View backgroundColor="gray2" css={{ padding: '20px 30px' }} radius={10}>
                gray2
              </View>
              <View backgroundColor="gray3" css={{ padding: '20px 30px' }} radius={10}>
                gray3
              </View>
              <View backgroundColor="gray4" css={{ padding: '20px 30px' }} radius={10}>
                gray4
              </View>
              <View backgroundColor="gray5" color="light" css={{ padding: '20px 30px' }} radius={10}>
                gray5
              </View>
              <View backgroundColor="gray6" color="light" css={{ padding: '20px 30px' }} radius={10}>
                gray6
              </View>
              <View backgroundColor="gray7" color="light" css={{ padding: '20px 30px' }} radius={10}>
                gray7
              </View>
              <View backgroundColor="gray8" color="light" css={{ padding: '20px 30px' }} radius={10}>
                gray8
              </View>
              <View backgroundColor="gray9" color="light" css={{ padding: '20px 30px' }} radius={10}>
                gray9
              </View>
              <View backgroundColor="dark" color="light" css={{ padding: '20px 30px' }} radius={10}>
                dark
              </View>
            </GridSmart>
          </View>
        </Section>

        <Section>
          <View container>
            <SectionTitle
              css={{ textAlign: 'center', marginBottom: '18px' }}
              title="Font Family"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam."
            />
            <Text fontFamily="primary" tagName="h3" css={{ marginBottom: '20px' }}>
              Font Primary
            </Text>
            <Text fontFamily="secondary" tagName="h3" css={{ marginBottom: '20px' }}>
              Font Secondary
            </Text>
            <Text fontFamily="tertiary" tagName="h3" css={{ marginBottom: '20px' }}>
              Font Tertiary
            </Text>
            <Text fontFamily="quaternary" tagName="h3" css={{ marginBottom: '20px' }}>
              Font Quaternary
            </Text>
          </View>
        </Section>

        <Section>
          <View container>
            <View row css={{ justifyContent: 'center' }}>
              <SectionTitle
                columns={[12, 10, 8]}
                css={{ textAlign: 'center', marginBottom: '18px' }}
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
            <View row css={{ justifyContent: 'center' }}>
              <SectionTitle
                columns={[12, 10, 8]}
                css={{ textAlign: 'center', marginBottom: '18px' }}
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
            <View
              backgroundColor="gray2"
              radius={10}
              css={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                '@media (min-width: 500px)': {
                  display: 'flex',
                  padding: '30px',
                },
              }}
            >
              <View>
                <Text tagName="h1">Hello</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?</Text>
              </View>
              <View css={{ marginTop: '8px' }}>
                <Button radius={10} backgroundColor="primary" css={{ marginRight: '12px' }} nightModeBlacklist="color">
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
              radius={10}
              css={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                '@media (min-width: 500px)': {
                  display: 'flex',
                  padding: '30px',
                },
              }}
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
              <View css={{ marginTop: '8px' }}>
                <Button radius={10} backgroundColor="primary" css={{ marginRight: '12px' }} nightModeBlacklist="all">
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
            <View row css={{ justifyContent: 'center' }}>
              <SectionTitle
                columns={[12, 10, 8]}
                css={{ textAlign: 'center', marginBottom: '18px' }}
                title="Test socials"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic?"
              />
            </View>
            <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              <View css={{ padding: '4px' }}>
                <Button radius={10} backgroundColor="facebook">
                  <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <LineAwesome name="facebook" css={{ marginRight: '8px' }} color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Facebook
                    </Text>
                  </View>
                </Button>
              </View>
              <View css={{ padding: '4px' }}>
                <Button radius={10} backgroundColor="twitter">
                  <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <LineAwesome name="twitter" css={{ marginRight: '8px' }} color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Twitter
                    </Text>
                  </View>
                </Button>
              </View>
              <View css={{ padding: '4px' }}>
                <Button radius={10} backgroundColor="dribbble">
                  <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <LineAwesome name="dribbble" css={{ marginRight: '8px' }} color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Dribbble
                    </Text>
                  </View>
                </Button>
              </View>
              <View css={{ padding: '4px' }}>
                <Button radius={10} backgroundColor="youtube">
                  <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <LineAwesome name="youtube" css={{ marginRight: '8px' }} color="light" nightModeBlacklist="color" />
                    <Text color="light" nightModeBlacklist="color">
                      Youtube
                    </Text>
                  </View>
                </Button>
              </View>
              <View css={{ padding: '4px' }}>
                <Button radius={10} backgroundColor="tumblr">
                  <View css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <LineAwesome name="tumblr" css={{ marginRight: '8px' }} color="light" nightModeBlacklist="color" />
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
