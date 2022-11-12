import React from 'react'
import '../../CSS/dataannotation.css'
import DataAnnotationTypeComponent from './DataAnnotationTypeComponent'
import ServiceContact from './ServiceContact'

const DataAnnotation = () => {
  return (
    <div className='dataannotation'>
        <div className='dataannotation_top'>
          <div className='dataannotation_heading_container '>
            <p className='dataannotation_heading animate__animated  animate__fadeInUp'>Data Annotation Services</p>
            <p className='dataannotation_description animate__animated  animate__fadeInUp'>Ready to take your business to the next level with artificial intelligence and machine learning?</p>
          </div>
        </div>

        <div className="dataannotation_tagline">
          <p>Data annotation services tailored to the specific needs of our clients. Our highly qualified team of experts work with clients to calibrate their quality requirements using custom processes that guarantee the accuracy of the annotation work. </p>
        </div>

        <div className='dataannotation_understanding'>
            <div className='dataannotation_understanding_left'>
                <h1>Understanding Data Annotation</h1>
                <p>It is the process of labelling or tagging data as it is entered or collected so that it can be easily categorized or searched. In data warehousing, data annotation is a process of documenting the data. It can be characterized as a four-step process: data identification, data description, data formatting and data analysis. </p>
                <p>The procedure aims to increase data quality, to help end users find what they are looking for, and to make the data more useful. As we find ourselves surrounded by high volumes of raw data that comes in unique formats like images, video, text, and audio, if appropriately labelled, quality data can be used to help supervised machine learning models identify objects, understand sentiment, and perform functions like speech recognition, driving etc.</p>

                <p>Speed is critical when it comes to data annotation, especially if you're looking for high-quality results. We have the perfect solution for you - a combination of the best predictive and automated annotation technology, paired with world-class data annotation experts. </p>
            </div>
            <div className='dataannotation_understanding_right'>
                <img src='https://ishwarishinde.github.io/cdn/dataannotation2.jpg' alt='img' />
            </div>
        </div>
        <DataAnnotationTypeComponent daimg='https://ishwarishinde.github.io/cdn/dataannotation3.png'  datitle="Semantic Segmentation" dadescription="Semantic segmentation is a great way to solve the vision problem in outdated computers. It takes raw data like 2D images and converts them into masks with areas that need to be highlighted. This process groups together parts of images that belong to the same object, making it easier for users to find what they're looking for. In doing so, it also solves the computer vision problem." />
        <div className='da_type_component da_type_wrapper'>
        <div className='DA_type1_left '>
                <img src="https://ishwarishinde.github.io/cdn/dataannotation3.png" alt='img' />
                
            </div>
            <div className='DA_type1_right'>
                <h1>Polygon Annotation</h1>
                <p>Polygon annotation is best for annotating irregular or asymmetrical objects that are in coarse shapes. It helps capture large images, like aerial photography, with more precise annotation. By annotating your images with bounding polygons, you can create sharper and more accurate vision models for aerial imagery.</p>
            </div>
    </div>
      
        <DataAnnotationTypeComponent daimg='https://ishwarishinde.github.io/cdn/dataannotation3.png'  datitle="Bounding Box Annotation" dadescription="If you're looking to get your autonomous vehicles up and running with the best object recognition technology available, then you need our help. We have the tools and expertise to properly tag and classify your data so that your vehicles can learn to identify these objects with ease. With our 2D and 3D bounding box annotation tool, we can help you train your autonomous vehicles to recognize any object you need them to. Contact us today to learn more about how we can help you get started." />

        <div className='da_type_component da_type_wrapper'>
        <div className='DA_type1_left '>
                <img src="https://ishwarishinde.github.io/cdn/dataannotation3.png" alt='img' />
                
            </div>
            <div className='DA_type1_right'>
                <h1>Landmark Annotation</h1>
                <p>Landmarking refers to plotting or points annotation for precise detection of shapes in different sized faces for computer vision. Used to detect facial features, expressions, emotions and postures of humans or other types of objects of interest. It helps to determine the actual density of the object within a particular area and better understand the movement trajectory of each point motion in the targeted object.</p>
            </div>
    </div>

        
        <DataAnnotationTypeComponent daimg='https://ishwarishinde.github.io/cdn/dataannotation3.png'  datitle="Text Annotation" dadescription="Text annotation is a process that helps machines understand text data. It works by breaking down text into phrases, sentences, and words. When you annotate text, you are telling the machine what each word means. This helps the machine understand what the text is saying. Get high-quality text annotation services to help deploy AI for various sectors." />
        <div className='da_type_component da_type_wrapper'>
        <div className='DA_type1_left '>
                <img src="https://ishwarishinde.github.io/cdn/dataannotation3.png" alt='img' />
                
            </div>
            <div className='DA_type1_right'>
                <h1>Image Annotation</h1>
                <p>The best tools and techniques to annotate images of all types and sizes so that they are recognizable by machines or computer vision. We have a team of experienced annotators who are familiar with the different annotation types and standards, so you can be sure that your images will be annotated accurately and precisely..</p>
            </div>
    </div>
        <DataAnnotationTypeComponent daimg='https://ishwarishinde.github.io/cdn/dataannotation3.png'  datitle="Video Annotation" dadescription="Our services provide the best quality annotated videos for deep learning or machine learning. We develop AI machines and computer systems by using annotated videos as training data to ensure precision in results. We can annotate any type of video using advanced techniques and tools, helping to build a computer vision model that produces the highest quality output. " />
        <div className='da_type_component da_type_wrapper'>
        <div className='DA_type1_left '>
                <img src="https://ishwarishinde.github.io/cdn/dataannotation3.png" alt='img' />
                
            </div>
            <div className='DA_type1_right'>
                <h1>Audio Annotation </h1>
                <p>We provide high-quality speech and audio annotation services in hundreds of languages, dialects, demographics, expressions, speakers, environments, and scenarios. Whether you need data for an AI-enabled audio application/device or speech recognition system, our audio data annotation and labelling experts will help you capture the right samples</p>
            </div>
    </div>
        

        <div className='why_dataannotation'>
        <div className='why_dataannotation_innercontent'>
          <h1>Why Us?</h1>
          
            <p>We pride ourselves on being able to offer our clients transparent pricing, a highly trained and scalable workforce, and a state-of-the-art labelling tool. With our large team of experienced labellers, we can quickly and easily scale up or down to meet your specific needs. And because security is always a top priority, we have highly controlled work environments to ensure that your data is always safe and secure.</p>
           
          </div>
        </div>

        <ServiceContact />
    </div>
  )
} 

export default DataAnnotation