import React, { FC } from 'react';
import { View, Text, Space, Button, useResponsive, TextUnderline, LineAwesome } from 'wiloke-react-core';
import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { useGetTodolistRequest } from './actions/actionTodolist';
import { todolistSelector } from './selectors';

const SectionHero: FC = () => {
  const { size, ref } = useResponsive({ maxWidth: 600 });
  const getTodolist = useGetTodolistRequest();
  const todolist = useSelector(todolistSelector);
  return (
    <Section>
      <View container>
        <View row tachyons={['items-center']}>
          <View columns={[12, 12, 5, 5]}>
            <View ref={ref}>
              <Text tagName="h2" color="dark1" size={size(66)}>
                Lorem{' '}
                <TextUnderline lineSize={size(25)} lineBottomSpace={size(50)} lineColor="#94fbd1">
                  Ipsum
                </TextUnderline>{' '}
                Dolor Sit Amet
              </Text>
              <Space size={size(40)} />
              <Text size={18} color="dark3">
                We created DrawTool with the goal of making it fun and effortless to create your designs. Expect epic and sophisticated results
                without any need for technical expertise!
              </Text>
              <Space size={size(40)} />
            </View>
            <View gridEqual colXs={1} colMd={2} gapXs={10}>
              <Button
                loading={todolist.isLoading}
                block
                radius="round"
                size="large"
                backgroundColor="secondary"
                nightModeBlacklist="color"
                tachyons="mb3"
                onClick={() => {
                  getTodolist({ endpoint: 'todolist' });
                }}
              >
                Get Todolist
              </Button>
              <Button block radius="round" size="large" backgroundColor="gray3" color="dark2" tachyons="mb3">
                <View tachyons={['flex', 'items-center', 'justify-center']}>
                  <Text>Tutorial</Text>
                  <LineAwesome name="play" tachyons="ml3" size={22} color="tertiary" />
                </View>
              </Button>
            </View>
          </View>
          <View columns={[12, 12, 7, 7]}>
            <img src="https://cdn.designbold.com/web/db2019/main/images/new-icon/home-hero.svg" alt="" />
          </View>
        </View>
      </View>
    </Section>
  );
};

export default SectionHero;
