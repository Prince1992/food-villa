import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <p>Test{isVisible}</p>
      <h3 className="font-bold text-3xl">{title}</h3>
      {!isVisible && (
        <button
          className="border bg-green-500"
          onClick={() => {
            setIsVisible('test');
          }}
        >
          Show
        </button>
      )}
      {isVisible && (
        <button
          className=" m-2 bg-red-300"
          onClick={() => {
            //setIsVisible(true);
          }}
        >
          Hide
        </button>
      )}

      <p>{isVisible && description}</p>
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState();

  return (
    <div>
      <h1 className="text-3xl m-2 p-2">Instamart</h1>
      <Section
        title={'About Instamart'}
        isVisible={visibleSection === 'about'}
        setIsVisible={() => {
          setVisibleSection('about');
        }}
        description={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      />
      <Section
        title={'Team Instamart'}
        isVisible={visibleSection === 'team'}
        description={
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        }
        setIsVisible={() => {
          setVisibleSection('team');
        }}
      />
      <Section
        title={'Carrer'}
        isVisible={visibleSection === 'carrer'}
        description={
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        }
        setIsVisible={() => {
          setVisibleSection('carrer');
        }}
      />
    </div>
  );
};

export default Instamart;
