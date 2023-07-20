import Head from "next/head"
import Link from "next/link"
import MainLayout from "../components/layout/MainLayout"
import OffsetText from '../components/OffsetText'
import Image from "next/image"

const about = () => {
  return (
    <div className="text-white">
      <Head>
        <title>Live Fickle | Contact</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout black>
      <OffsetText id="mission-statement" title="Mission Statement" white>
      &quot;At Live Fickle, we believe that mental health is the key to living a fulfilling and meaningful life. That&apos;s why we&apos;re dedicated to supporting individuals as they navigate the ups and downs of being human and embrace their true selves. We recognize that everyone is flawed, indecisive, and confused at times, but we also believe that these qualities make us kaleidoscopic and effervescent. Our goal is to create a community where individuals can feel comfortable exploring and expressing their thoughts, emotions, and identities without fear of judgment. By embracing our own fickleness and embracing each other, we can all learn to live authentically and embrace our unique, lovely selves.&quot;
    <br />
    <br />
    By embracing our own fickleness, we can all learn to love ourselves and each other just as we are.  
      </OffsetText>
      <div className="container flex justify-center mx-auto">
      <Image
              alt='Be Fickle Circle Logo'
              src='/subway-mockup-newest.jpg'
              height='666'
              width='666'
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }}
              />
      </div>
      <OffsetText id="the-problem" title="The Problem" white>
      The detrimental impacts of bullying and lack of tolerance, or the strict adherence to socially acceptable norms. 
      <br />
    <br />

Bullying, intolerance and the strict adherence to socially acceptable norms have a detrimental impact on individuals and society as a whole.
<br />
    <br />

Bullying can cause a range of negative emotions and physical health problems in those who are targeted, and it can lead to social isolation, low self-esteem, and a sense of worthlessness. These negative effects can have a lasting impact on individuals&apos; mental and physical health, even after the bullying has stopped.
<br />
    <br />

Lack of tolerance and the strict adherence to socially acceptable norms can also have a negative impact on individuals and society. It can lead to discrimination and exclusion, and it can prevent people from expressing their true identities and being their authentic selves. This can have a negative impact on mental health, as well as on social cohesion and the overall well-being of society.
<br />
    <br />

Here at Live Fickle we strive to promote tolerance, diversity, and acceptance, and to take action to prevent bullying and other forms of discrimination and exclusion. By creating a more inclusive and compassionate society, we can help to promote the well-being and happiness of all individuals.
      </OffsetText>
      <div className="container flex justify-center mx-auto">
      <Image
              alt='Be Fickle Circle Logo'
              src={'/arrows-final-unscreen.gif'}
              height='266'
              width='266'
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }}
              />
      </div>
      <OffsetText id="mental-health" title="Good Mental Health" white>
      Mental health is an important aspect of overall health and well-being. It refers to a person&apos;s emotional, psychological, and social well-being, and it affects how we think, feel, and behave. Good mental health is essential for living a happy and fulfilling life, and it can help us to cope with the challenges and stresses of everyday life.
      <br />
    <br />
    There are several reasons why mental health is important:
    <br />
    <br />
    Mental health affects physical health: Poor mental health can have negative effects on physical health, and vice versa. For example, depression has been linked to an increased risk of certain physical health conditions, such as heart disease and diabetes.
    <br />
    <br />
    Mental health affects relationships: Mental health can impact how we interact with others and form and maintain relationships. Poor mental health can lead to social isolation and strain on relationships, while good mental health can help us to build strong and supportive relationships.
    <br />
    <br />
    Mental health affects work and productivity: Mental health can affect how we perform at work and how productive we are. Poor mental health can lead to absenteeism and decreased productivity, while good mental health can improve job performance and productivity.
    <br />
    <br />
     At Live Fickle we believe that mental health is a fundamental human right: Everyone has the right to good mental health, and it is important to recognize and respect this right.
      </OffsetText>

      <OffsetText id="the-norm" title="Re-defining the Norm" white>
      While &quot;fickle&quot; is often used in a negative sense to describe someone who is indecisive or unreliable, it can also be seen as a positive trait. For example, a person who is open-minded and willing to consider different viewpoints or options may be described as &quot;fickle&quot; in the sense that they are not rigidly fixed in their beliefs or preferences. This flexibility and adaptability should be seen as a strength. 
      <br />
    <br />
    Here are a few reasons why &quot;fickle&quot; is a good word:    <br />
    <br />
    Open-mindedness: A person who is fickle may be more open to considering different viewpoints or options, rather than being rigidly fixed in their beliefs or preferences. This open-mindedness can be a valuable quality, as it allows a person to be more adaptable and flexible in their thinking.
    <br />
    <br />
    Curiosity: Being fickle may indicate a curiosity or desire to explore and try new things, rather than being stuck in a rut or stuck in old habits. This desire for novelty and variety can be a driving force for personal growth and development.
    <br />
    <br />
    Adaptability: In a rapidly changing world, the ability to adapt and change one&apos;s mind or allegiances can be a valuable asset. A fickle person may be more capable of adapting to new circumstances and making the most of new opportunities.
      </OffsetText>    
    </MainLayout>
    </div>
  )
}

export default about