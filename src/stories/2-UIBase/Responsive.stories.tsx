import React from 'react';
import { Text, View } from 'wiloke-react-core';
import Responsive, { SBUseResponsive } from './base/Responsive';

export default {
  title: 'UI Base/Responsive',
  component: Responsive,
};

export const Default = () => {
  return (
    <View>
      <Responsive
        maxWidth={800}
        minWidth={400}
        children={(size, ref) => (
          <View borderWidth="1/6" borderColor="dark1" borderStyle="solid" backgroundColor="primary" ref={ref}>
            <Text color="dark1" size={size(100)}>
              Text Responsive
            </Text>
          </View>
        )}
      />

      <Responsive
        maxWidth={800}
        minWidth={400}
        children={(size, ref) => (
          <View borderWidth="1/6" borderColor="dark1" borderStyle="solid" backgroundColor="primary" ref={ref}>
            <Text color="dark1" size={size(100)}>
              Text Responsive
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export const UseResponsive = () => {
  const element1 = SBUseResponsive({ maxWidth: 800, minWidth: 400 });
  const element2 = SBUseResponsive({ maxWidth: 500, minWidth: 300 });

  return (
    <View>
      <View borderWidth="1/6" borderColor="dark1" borderStyle="solid" backgroundColor="primary" ref={element1.ref}>
        <Text color="dark1" size={element1.size(100)}>
          Text Responsive 1
        </Text>
      </View>
      <View borderWidth="1/6" borderColor="dark1" borderStyle="solid" backgroundColor="primary" ref={element2.ref}>
        <Text color="dark1" size={element2.size(80)}>
          Text Responsive 2
        </Text>
      </View>
    </View>
  );
};
