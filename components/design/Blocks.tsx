"use client"
import { IDesign } from '@/interfaces'
import React, { useEffect, useRef, useState } from 'react'
import { Button, H1, H2, H3, LinkButton, P } from '../ui'

interface Props {
    content: IDesign
    index: number
    style?: any
}

export const Blocks: React.FC<Props> = ({ content, index, style }) => {
  const [question, setQuestion] = useState(-1);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [titleLoaded, setTitleLoaded] = useState(false);
  const [descriptionLoaded, setDescriptionLoaded] = useState(false);
  const [block1Loaded, setBlock1Loaded] = useState(false);
  const [block2Loaded, setBlock2Loaded] = useState(false);
  const [block3Loaded, setBlock3Loaded] = useState(false);
  const [block4Loaded, setBlock4Loaded] = useState(false);
  const [block5Loaded, setBlock5Loaded] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const block4Ref = useRef(null);
  const block5Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setTitleLoaded(true);
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setDescriptionLoaded(true);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock1Loaded(true);
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block1Ref.current) {
      observer.observe(block1Ref.current);
    }

    return () => {
      if (block1Ref.current) {
        observer.unobserve(block1Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock2Loaded(true);
          }, 400);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block2Ref.current) {
      observer.observe(block2Ref.current);
    }

    return () => {
      if (block2Ref.current) {
        observer.unobserve(block2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock3Loaded(true);
          }, 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block3Ref.current) {
      observer.observe(block3Ref.current);
    }

    return () => {
      if (block3Ref.current) {
        observer.unobserve(block3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock4Loaded(true);
          }, 600);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block4Ref.current) {
      observer.observe(block4Ref.current);
    }

    return () => {
      if (block4Ref.current) {
        observer.unobserve(block4Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setBlock5Loaded(true);
          }, 700);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (block5Ref.current) {
      observer.observe(block5Ref.current);
    }

    return () => {
      if (block5Ref.current) {
        observer.unobserve(block5Ref.current);
      }
    };
  }, []);

  const toggleQuestion = (i: number) => {
    setQuestion(question === i ? -1 : i);
  };

  const getMaxHeight = (i: number): string => {
    if (contentRefs.current[i]) {
      return question === i ? `${contentRefs.current[i]?.scrollHeight}px` : "0px";
    }
    return "0px";
  };

  return (
    <div
      className={`py-10 md:py-20 px-4 m-auto w-full flex`}
      style={{
        background: `${
          content.info.typeBackground === "Degradado"
            ? content.info.background
            : content.info.typeBackground === "Color"
            ? content.info.background
            : ""
        }`,
      }}
    >
      <div className='flex flex-col gap-8 w-full max-w-[1280px] m-auto'>
        <div className="flex flex-col gap-3">
          {
            content.info.title && content.info.title !== ''
              ? (
                <div ref={titleRef} className={`${titleLoaded ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500`}>
                  {
                    index === 0
                      ? <H1 text={content.info.title} color={content.info.textColor} config='text-center font-semibold' />
                      : <H2 text={content.info.title} color={content.info.textColor} config='text-center font-semibold' />
                  }
                </div>
              )
              : ''
          }
          {
            content.info.description && content.info.description !== ''
              ? (
                <div ref={descriptionRef} className={`${descriptionLoaded ? 'opacity-1' : 'opacity-0 translate-y-6'} transition-all duration-500`}>
                  <P text={content.info.description} color={content.info.textColor} config='text-center' />
                </div>
              )
              : ''
          }
          {
            content.info.blocks?.length
              ? (
                <div className='flex gap-6 justify-around flex-wrap'>
                  {content.info.blocks?.map((block, i) => (
                    <div
                      key={i}
                      ref={i === 0 ? block1Ref : i === 1 ? block2Ref : i === 2 ? block3Ref : i === 3 ? block4Ref : i === 4 ? block5Ref : ''}
                      className={`${i === 0 ? block1Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : i === 1 ? block2Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : i === 2 ? block3Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : i === 3 ? block4Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : i === 4 ? block5Loaded ? 'opacity-1' : 'opacity-0 translate-y-6' : ''} transition-all duration-500 flex flex-col p-6 w-full max-w-96 min-h-48 lg:min-h-56`}
                      style={{
                        boxShadow: style.design === 'Sombreado' ? `0px 3px 20px 3px ${style.borderColor}10` : '',
                        borderRadius: style.form === 'Redondeadas' ? `${style.borderBlock}px` : '',
                        border: style.design === 'Borde' ? `1px solid ${style.borderColor}` : '',
                        backgroundColor: content.info.image
                      }}
                    >
                      <div className='flex flex-col gap-2 m-auto'>
                        {block.title && block.title !== "" ? (
                          index === 0 ? (
                              <H2 text={block.title} color={content.info.textColor} config="text-center font-semibold" />
                          ) : (
                              <H3 text={block.title} color={content.info.textColor} config="text-center font-semibold" />
                          )
                          ) : (
                          ""
                        )}
                        <p className="text-center" style={{ color: content.info.textColor }}>{block.description}</p>
                        {
                          block.buttonLink && block.buttonLink !== '' && block.buttonText && block.buttonText !== ''
                            ? <LinkButton url={block.buttonLink} style={style} config='mx-auto'>{block.buttonText}</LinkButton>
                            : ''
                        }
                      </div>
                    </div>
                  ))}
                </div>
              )
              : ''
          }
        </div>
      </div>
    </div>
  );
};