import React from 'react';
import { Image, Text, View } from 'wiloke-react-core';
import { number } from '@storybook/addon-knobs';
import Sticky from './base/Sticky';

export default {
  title: 'UI Base/Sticky',
  component: Sticky,
};

export const Default = () => {
  const sticky1Zindex = number('Element 1 Z Index', 1, { range: true, min: 1, max: 1000 }, 'Sticky Element 1');
  const startSticky1Position = number('Element 1 Start Sticky Position', 1, { range: true, min: 1, max: 100000 }, 'Sticky Element 1');
  const endSticky1Position = number('Element 1 End Sticky Position', 100000, { range: true, min: 1, max: 100000 }, 'Sticky Element 1');

  const sticky2Zindex = number('Element 2 Z Index', 1, { range: true, min: 1, max: 1000 }, 'Sticky Element 2');
  const startSticky2Position = number('Element 2 Start Sticky Position', 1, { range: true, min: 1, max: 100000 }, 'Sticky Element 2');
  const endSticky2Position = number('Element 2 End Sticky Position', 100000, { range: true, min: 1, max: 100000 }, 'Sticky Element 2');

  return (
    <View>
      <View height={500} width={window.innerWidth} backgroundColor="primary" color="light">
        Box 1
      </View>
      <Sticky zIndex={sticky1Zindex} stickyEnableRange={[startSticky1Position, endSticky1Position]}>
        <View height={200} width={window.innerWidth} backgroundColor="success" color="light">
          Sticky Element 1
        </View>
      </Sticky>
      <View height={500} width={window.innerWidth} backgroundColor="linkedin" color="light">
        Box 2
      </View>
      <Sticky zIndex={sticky2Zindex} stickyEnableRange={[startSticky2Position, endSticky2Position]}>
        <View height={200} width={window.innerWidth} backgroundColor="danger" color="light">
          Sticky Element 2
        </View>
      </Sticky>
      <View height={500} width={window.innerWidth} backgroundColor="pinterest" color="light">
        Box 3
      </View>
      <View height={500} width={window.innerWidth} backgroundColor="quaternary" color="light">
        Box 4
      </View>
      <View height={500} width={window.innerWidth} backgroundColor="quinary" color="light">
        Box 5
      </View>
    </View>
  );
};

export const Example = () => {
  return (
    <View container>
      <View row id="containerSelectorFocus">
        <View columns={[3, 3, 3, 3]}>
          <Sticky containerSelector="#containerSelectorFocus" offsetTop={20} stickyEnableRange={[768, Infinity]}>
            <View tachyons="pa3" backgroundColor="primary" color="light" height={500}>
              <Text tagName="h1" color="light" tachyons="mb3">
                Short Sidebar
              </Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam facilis totam praesentium reiciendis omnis voluptas deserunt
              consequuntur quibusdam quos aut? Facere fuga iste optio assumenda accusantium neque architecto voluptatibus. Fugit ut odit nostrum
              molestias iste aliquid explicabo libero nemo impedit reprehenderit deleniti quaerat, illum nobis consequuntur beatae tempore architecto.
              Eligendi?
            </View>
          </Sticky>
        </View>
        <View columns={[6, 6, 6, 6]}>
          <View tachyons="pa3" backgroundColor="secondary" color="light" height={3000}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat labore quasi eaque commodi quod porro culpa quidem veritatis
            sint obcaecati in. Sapiente atque labore voluptas ipsa, est quidem eaque dolorem iste quas maiores excepturi sed repellat incidunt
            architecto asperiores, suscipit laborum minus ex magni explicabo ducimus, deleniti magnam. Vero culpa unde, dolorum nesciunt, sint
            perspiciatis nam officiis debitis fugit officia quas voluptates illum, laudantium doloribus quasi animi temporibus architecto soluta
            itaque molestiae cumque quae esse. Debitis vel labore saepe, exercitationem pariatur laborum voluptates amet a. Repudiandae molestiae
            nobis consequatur optio, quae, dicta enim at tenetur officia vero debitis! Voluptas sint nihil quisquam odio soluta optio temporibus illum
            <Image
              src="https://images.pexels.com/photos/4199096/pexels-photo-4199096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              previewSrc="https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-4x3.jpeg"
              alt="AAAA"
              imageStyle={{ minWidth: 300 }}
            />
            dicta aspernatur inventore ex, quidem totam culpa expedita doloremque nisi excepturi. Qui ducimus provident magni expedita accusamus ab
            nihil doloremque non at laboriosam placeat similique asperiores quos harum aut officia, explicabo eum dolorum modi reiciendis itaque
            nostrum! Distinctio sed, animi reprehenderit laboriosam fugiat quasi pariatur nisi quas ipsa soluta ut facere aliquid dolorum possimus aut
            ea omnis consequatur. Unde molestias accusantium quis distinctio asperiores ipsum deleniti vitae ut. Quis cupiditate et officia odit vitae
            reiciendis corrupti error vel consequuntur beatae veritatis minus sapiente doloremque illo suscipit, numquam earum asperiores animi
            mollitia modi eum vero inventore harum quia. Possimus quo eligendi nobis dolores velit, ipsam repellendus assumenda cum aperiam iure.
            Tenetur voluptatem ipsam, ducimus labore eligendi minus officiis? In nobis assumenda ea est, veniam sunt asperiores cum saepe at aliquid
            sequi. Fugiat perferendis laborum accusantium, quos totam velit saepe. Exercitationem, maiores. Voluptatibus obcaecati repudiandae saepe.
            Consequatur dolores quasi numquam sequi ducimus nihil, autem reiciendis doloribus corrupti quae voluptatum blanditiis praesentium tempore
            cumque fuga optio nulla commodi. Veniam modi tempora fugiat adipisci quod asperiores molestias dolor repellendus quasi dignissimos at nisi
            similique illo deleniti aspernatur necessitatibus harum optio perferendis ab saepe quisquam possimus, facilis assumenda? Quasi nihil autem
            aliquid reiciendis nobis! Sed quidem soluta, illum tempora ratione corporis dolorum, mollitia tempore adipisci quae, modi laborum! Ab
            iusto distinctio nostrum magnam cupiditate, necessitatibus in odio mollitia provident natus sapiente expedita tempora tenetur aliquam
            facilis modi dolore sed, itaque alias, laboriosam soluta asperiores! Quis, sequi? Unde, fugit adipisci. Repudiandae consectetur, delectus
            minima modi dolorem totam facilis at minus, maxime et ratione aliquid. Quia, tenetur? Iusto repellat non vitae quo optio eos quae pariatur
            cum veniam neque? Ab reprehenderit, consequuntur, quod sed ipsa eos repudiandae sequi minus reiciendis, aut vel at blanditiis. Numquam
            unde nisi minus labore facilis perferendis laudantium nesciunt, at quisquam exercitationem itaque aperiam ea! Nemo dicta quos voluptates
            nulla error laudantium accusantium nihil vero odio, vel incidunt ratione magni sunt ut optio tenetur cumque ipsum harum fugiat sed enim
            nesciunt reprehenderit unde. Inventore impedit, neque consectetur est nihil esse provident aperiam incidunt voluptate illo excepturi sunt
            harum minus quos aspernatur amet labore eius itaque autem modi sapiente minima? Ipsam beatae repellendus possimus excepturi dicta ratione
            a sit quibusdam maxime debitis nihil veniam id temporibus iure ducimus, porro animi corporis, voluptatum blanditiis sequi cupiditate? Cum
            nesciunt praesentium tempora facere nemo quidem doloremque voluptas debitis ipsam id enim molestias commodi, sequi nihil ad exercitationem
            deleniti illum et eveniet veniam fugiat quod! Tenetur iure quaerat qui impedit doloribus, fugiat, delectus consequuntur ab cumque vero,
            quos magnam aliquam aut cupiditate! Molestias optio repellat libero distinctio sint obcaecati eos, aliquam qui doloremque tenetur,
            aspernatur aut consectetur similique iure corporis! Nemo dolor aperiam ex aliquid odit nihil porro aspernatur exercitationem dolorum
            alias, cupiditate, officiis placeat nobis molestias pariatur eos eum tempore adipisci voluptatibus voluptate fugit? Quam, mollitia vero
            eligendi animi minima aliquid autem voluptatum. In dolorem eligendi dicta consectetur earum ipsum sunt? Labore tenetur sed explicabo
            corrupti quis consequatur laborum commodi sint inventore mollitia numquam ducimus, id, omnis deleniti repellendus odit. Debitis atque
            sapiente exercitationem quidem assumenda minima eaque praesentium! Accusamus, quis debitis? Ea quam, perspiciatis dolore itaque quisquam
            vel fuga incidunt sequi, corrupti reiciendis laborum explicabo pariatur, doloribus saepe? Quaerat voluptatem repellat facere placeat eum
            eos delectus ipsa! Quis odio quod repellendus dolore dignissimos quidem magnam voluptate libero quas. Officiis, corrupti voluptatum
            architecto pariatur dolor quod nulla eaque asperiores quisquam repudiandae suscipit vero ipsa delectus nobis porro temporibus obcaecati.
            Accusantium omnis quos voluptatem excepturi ipsa, vel eum tenetur magni suscipit voluptates placeat accusamus. Iure deleniti laborum
            eligendi ex, delectus temporibus iste totam accusamus dolorum unde officiis distinctio tempora dolore culpa aperiam officia harum nisi?
            Rem ut voluptatem excepturi autem expedita qui eaque corporis culpa molestiae doloribus dolores deleniti mollitia a molestias dolore
            repellendus totam sequi, ad nobis blanditiis? Aut repellat quidem officia maiores cum. Reprehenderit a eum quidem nisi neque culpa
            distinctio harum! Hic sequi itaque ipsum quae veritatis. Maiores unde omnis modi corrupti, dignissimos recusandae dolorem vitae
            reprehenderit, dolores sed maxime nam labore provident corporis animi vero sint error impedit facilis expedita architecto praesentium.
            Perspiciatis nisi officiis sapiente quia harum earum dolor facere optio quidem quas culpa nam molestiae magnam, perferendis accusantium
            qui ea repudiandae rerum pariatur magni eos, quis neque? Minima voluptatum debitis, alias culpa nostrum molestiae veniam quam consectetur
            dolores ea sit eos asperiores, placeat aliquam! Excepturi quis iusto animi esse repellendus ipsum consectetur, voluptate aut dignissimos
            inventore dolores iure, accusamus facere corporis, praesentium similique ratione aspernatur voluptas a nihil voluptatem illo! Veniam,
            architecto autem. Doloribus id officiis quod impedit aspernatur! Recusandae sequi itaque nesciunt eaque maxime hic animi illum totam
            dolorum, excepturi nisi asperiores? Similique nulla quidem nemo expedita dolor, corrupti facere minus suscipit laborum aperiam quaerat.
            Atque unde molestiae aperiam nesciunt rerum sunt, voluptatem blanditiis eius cupiditate ipsum corrupti doloremque laborum voluptatibus
            fuga distinctio quam laboriosam quis dolores quae accusantium! Velit molestiae facere, laborum eaque sunt, rem eligendi sed officia
            voluptate dolore quidem! Quibusdam cupiditate id neque minus ducimus vel consequatur culpa iure, aliquid, repellendus odio voluptate sunt
            perspiciatis facilis nostrum non, quod tempora. Ut dignissimos quia facere ducimus provident libero eveniet magnam tenetur officia
            consectetur hic non voluptatibus distinctio, ipsum amet nemo commodi adipisci voluptatum placeat esse temporibus iste. Eveniet officiis
            iusto quia quaerat molestiae quod omnis expedita ex saepe. Doloribus, et ipsum id odit blanditiis earum laborum, natus reprehenderit,
            necessitatibus beatae laboriosam.
          </View>
        </View>
        <View columns={[3, 3, 3, 3]}>
          <Sticky containerSelector="#containerSelectorFocus" offsetTop={250} stickyEnableRange={[768, Infinity]}>
            <View tachyons="pa3" backgroundColor="primary" color="light" height={1681}>
              <Text tagName="h1" color="light" tachyons="mb3">
                Long Sidebar
              </Text>
              <Text tagName="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum consequatur quidem dolorum illum. Amet pariatur, nam
                nesciunt assumenda dolor aspernatur esse, ab corrupti temporibus sint magnam accusantium eum voluptas eaque nobis, architecto veniam
                fugit reprehenderit accusamus sit iste maiores eveniet labore cum. Labore adipisci enim fugiat ut deserunt veniam, animi magni ad
                autem tempora totam, corrupti exercitationem reiciendis est sed perferendis? Repellendus odio atque saepe ex beatae facilis error
                aliquid magnam nobis, fugit in ipsum maiores! Nemo accusantium in ad officiis explicabo dignissimos maxime odio fuga, voluptates
                blanditiis corrupti earum non aliquam voluptatem labore suscipit voluptatum ipsa, placeat excepturi?
              </Text>
              <Image
                src="https://images.pexels.com/photos/3874098/pexels-photo-3874098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                previewSrc="https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-4x3.jpeg"
                alt="AAAA"
              />
              <Text tagName="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum consequatur quidem dolorum illum. Amet pariatur, nam
                nesciunt assumenda dolor aspernatur esse, ab corrupti temporibus sint magnam accusantium eum voluptas eaque nobis, architecto veniam
                fugit reprehenderit accusamus sit iste maiores eveniet labore cum. Labore adipisci enim fugiat ut deserunt veniam, animi magni ad
                <Image
                  src="https://images.pexels.com/photos/5392513/pexels-photo-5392513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  previewSrc="https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-4x3.jpeg"
                  alt="AAAA"
                />
                autem tempora totam, corrupti exercitationem reiciendis est sed perferendis? Repellendus odio atque saepe ex beatae facilis error
                aliquid magnam nobis, fugit in ipsum maiores! Nemo accusantium in ad officiis explicabo dignissimos maxime odio fuga, voluptates
                blanditiis corrupti earum non aliquam voluptatem labore suscipit voluptatum ipsa, placeat excepturi?
              </Text>
            </View>
          </Sticky>
        </View>
      </View>
    </View>
  );
};

export const Example2 = () => {
  return (
    <View>
      <View container>
        <View row id="containerSelectorFocus">
          <View columns={[3, 3, 3, 3]}>
            <View backgroundColor="primary" color="light" tachyons={['pa4', 'mb3']}>
              <Text tagName="h1" color="light" tachyons="mb2">
                Box 1
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere lacus tempus ante tristique, nec iaculis nibh commodo. Nam
                non condimentum augue, ut rutrum elit. Cras sollicitudin ante sem, quis varius dui venenatis sit amet.
              </Text>
            </View>
            <Sticky containerSelector="#containerSelectorFocus">
              <View backgroundColor="primary" color="light" tachyons={['pa4', 'mb3']}>
                <Text tagName="h1" color="light" tachyons="mb2">
                  Sticky Box 1
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere lacus tempus ante tristique, nec iaculis nibh commodo. Nam
                  non condimentum augue, ut rutrum elit. Cras sollicitudin ante sem, quis varius dui venenatis sit amet.
                </Text>
              </View>
            </Sticky>
          </View>
          <View columns={[6, 6, 6, 6]}>
            <View backgroundColor="gray5" tachyons="pa3">
              <Text tagName="h1" tachyons={['pa4', 'mb3']}>
                Main Content
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sed odit sit, repellendus minima similique iste deleniti nisi
                quod quas, facere quisquam repudiandae omnis atque vero commodi quis eum, reiciendis quos. Illum tempore est, facilis minus rem
                praesentium adipisci cupiditate asperiores natus labore at magni et minima autem voluptatibus possimus vero, dolor pariatur expedita,
                itaque hic libero. Magni quod natus accusantium placeat possimus odit similique id, dolorum impedit harum nobis saepe dolores qui quae
                eligendi totam illum, blanditiis accusamus facere mollitia. Asperiores nesciunt obcaecati consequatur cumque deleniti. Quaerat sequi
                sunt, voluptate, voluptas quae doloribus tempora doloremque voluptatem nostrum sint itaque!
              </Text>
              <Image src="https://images.pexels.com/photos/5844317/pexels-photo-5844317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="AAAAA" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet quas corrupti reprehenderit iusto hic tenetur at fuga,
              consequatur, unde consequuntur libero, repellendus in numquam accusamus perferendis sapiente expedita quis doloribus beatae laboriosam?
              Impedit modi aliquid alias, possimus corporis doloribus perferendis asperiores illum, itaque aut dolores officia atque dolorum nulla
              excepturi reprehenderit neque sunt nam suscipit aliquam hic, voluptatibus sed vero! Laboriosam magnam libero sint harum reiciendis,
              animi id, et iure perferendis sequi commodi neque voluptatem unde suscipit inventore nemo exercitationem? Modi maiores nam nesciunt eius
              quo aliquam omnis doloremque? Modi quisquam fuga velit porro, provident vitae voluptas nulla explicabo doloremque cumque tenetur officia
              ad libero mollitia incidunt quos non id.
              <Image src="https://images.pexels.com/photos/4289852/pexels-photo-4289852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="AAAA" />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iste quasi iusto, fuga inventore quae hic doloremque tenetur nobis
              odit autem tempora voluptatem reiciendis earum quo accusamus. Hic temporibus ex itaque sunt. Voluptatum ea, quisquam labore maiores
              minima molestiae dolor rem reprehenderit impedit deserunt nesciunt, nostrum quam dolore consequatur sunt veniam vel quaerat odit facere,
              nobis sapiente tenetur. Aliquam vel dolores exercitationem corrupti autem earum vero, nostrum eius, ab laudantium non suscipit
              voluptatum, temporibus sed architecto. Doloremque, vitae laudantium soluta obcaecati tempore atque esse perspiciatis. Nemo incidunt
              obcaecati quos reiciendis eius totam aperiam corrupti excepturi voluptates veniam? Corporis, soluta numquam.
              <Image src="https://images.pexels.com/photos/2746025/pexels-photo-2746025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="AAAA" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate doloremque quidem. Magnam quasi inventore necessitatibus
              dolor. Eius earum sint, distinctio voluptatum non repellat, suscipit enim libero corporis praesentium esse in rem doloremque, ea ex
              dignissimos accusantium quia minima? Consequuntur laboriosam magni, aliquam molestiae eveniet reprehenderit accusantium? Praesentium,
              nostrum. Nisi.
            </View>
          </View>
          <View columns={[3, 3, 3, 3]}>
            <View backgroundColor="primary" color="light" tachyons={['pa4', 'mb3']}>
              <Text tagName="h1" color="light" tachyons="mb2">
                Box 1
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere lacus tempus ante tristique, nec iaculis nibh commodo. Nam
                non condimentum augue, ut rutrum elit. Cras sollicitudin ante sem, quis varius dui venenatis sit amet.
              </Text>
            </View>
            <Sticky containerSelector="#containerSelectorFocus">
              <View backgroundColor="primary" color="light" tachyons={['pa4', 'mb3']}>
                <Text tagName="h1" color="light" tachyons="mb2">
                  Sticky Long Box 1
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere lacus tempus ante tristique, nec iaculis nibh commodo. Nam
                  non condimentum augue, ut rutrum elit. Cras sollicitudin ante sem, quis varius dui venenatis sit amet.
                  <Image src="https://images.pexels.com/photos/3439150/pexels-photo-3439150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="AAAA" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum eaque inventore velit? Suscipit quia, sed ducimus deserunt quas
                  facilis sint magni voluptas vitae impedit inventore labore laboriosam explicabo commodi laborum, iusto ab quasi laudantium nam,
                  ipsum non delectus! Optio consectetur tenetur dolorum perferendis magni recusandae fugiat illo nam quia ea explicabo reprehenderit
                  nobis possimus est qui maiores rerum facilis provident rem asperiores, tempore veniam sequi ullam vero? Voluptate labore iste earum,
                  dolorum corporis quae ipsa cupiditate quam error excepturi deleniti optio odio aliquam ut sint nulla eum hic sequi dicta assumenda.
                  Aspernatur iste quas architecto. Numquam quis commodi doloribus.
                  <Image src="https://images.pexels.com/photos/5546074/pexels-photo-5546074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="AAAA" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit minima magni architecto distinctio maxime, fugit alias
                  incidunt et asperiores reiciendis error itaque voluptatibus veniam quibusdam vero recusandae rem quis nemo aliquid. Non ab ipsam
                  quas, cumque fugiat dolor mollitia placeat assumenda corrupti! Fuga eos ex debitis, corrupti praesentium rerum.
                </Text>
              </View>
            </Sticky>
          </View>
        </View>
      </View>
      <Image src="https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="AAAA" />
      <View />
    </View>
  );
};
