import React, { forwardRef, useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';

import * as S from './styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import { CTAModel } from '@/src/models/CTA';
import { Button } from '../Button';
import { EAlignment } from '../Button/styles';

export type ModalProps = {
  headerTitle?: string;
  title?: string;
  description?: string;
  primaryButton?: CTAModel;
};

export const Modal = forwardRef<BottomSheetModal, ModalProps>(
  ({ headerTitle, title, description, primaryButton }, ref) => {
    const theme = useTheme();

    const backdropComponent = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={backdropComponent}
        enablePanDownToClose
        enableOverDrag
        enableHandlePanningGesture>
        <BottomSheetView>
          <S.Header>
            <Text fontFamily="bold" color={theme.colors.gray[700]} size="lg">
              {headerTitle}
            </Text>
          </S.Header>
          <S.Content>
            <Text fontFamily="medium" color={theme.colors.gray[700]}>
              {title}
            </Text>
            <Text fontFamily="regular" color={theme.colors.gray[600]} size="sm">
              {description}
            </Text>

            {primaryButton && (
              <Button
                alignment={EAlignment.CENTER}
                label={primaryButton.label}
                onPress={primaryButton.handlePress}
                marginTop="xl"
                radius="md"
                color={theme.colors.gray[600]}
                labelProps={{
                  fontFamily: 'regular',
                  size: 'md',
                  color: theme.colors.singletons.white,
                }}
              />
            )}
          </S.Content>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
